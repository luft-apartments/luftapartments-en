import React from 'react';
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css';
import styles from './GallerySlider.module.scss';


export const GallerySlider = ({ slides }) => {

  const images = slides.map((slide, index) => ({
    key: index,
    original: slide.image,
    thumbnail: slide.image,
    thumbnailClass: styles.galleryThumbnail,
  }));

  return (
    <ImageGallery
      showPlayButton={false}
      showThumbnails={true}
      // thumbnailPosition="right"
      items={images}
      className={styles.gallerySlider}
    />
  );
}
