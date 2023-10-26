"use client";
import React, { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css';
import styles from './GallerySlider.module.scss';
import Image from 'next/image';


export const GallerySlider = ({ slides }) => {

  const [thumbnailPosition, setThumbnailPosition] = useState('right');

  useEffect(() => {
    // Функция для обработки изменения размера окна
    const handleResize = () => {
      // Проверяем текущую ширину окна
      const windowWidth = window.innerWidth;

      // Обновляем свойство thumbnailPosition в зависимости от ширины окна
      if (windowWidth <= 768) {
        setThumbnailPosition('bottom');
      } else {
        setThumbnailPosition('right');
      }
    };

    // Добавляем слушатель события изменения размера окна
    window.addEventListener('resize', handleResize);

    // Вызываем обработчик при монтировании компонента
    handleResize();

    // Убираем слушатель события при размонтировании компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const images = slides.map((slide, index) => ({
    key: index,
    original: slide.image,
    thumbnail: slide.image,
    thumbnailClass: styles.galleryThumbnail,
    ariaLabel: "luft apartments",
  }));

  return (
    <ImageGallery
      showPlayButton={false}
      showThumbnails={true}
      thumbnailPosition={thumbnailPosition}
      // thumbnailPosition="right"
      items={images}
      className={styles.gallerySlider}
    />
  );
}
