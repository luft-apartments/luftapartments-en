"use client"
import Link from 'next/link';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import Image from 'next/image';

import styles from './Slider.module.scss';

export const Slider = ({ slides }) => {

  return (
    <div>
      <Swiper
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Autoplay, A11y]}
        effect='fade'
        navigation={{
          nextEl: '.buttonNext',
          prevEl: '.buttonPrev',
        }}
        className={styles.slider}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={styles.slide}>
              <div className={styles.imageContainer}>
                {slide.image && (
                  <Image
                    className={styles.slideImage}
                    src={slide.image}
                    alt={slide.title}
                    width={1920} height={1080}
                  />
                )}
              </div>
              <div className={styles.slideContent}>
                <div className={styles.slideSubcontent}>
                  <h2 className={styles.slideTitle}>{slide.title}</h2>
                  <p className={styles.slideText}>{slide.text}</p>
                  <Link className={styles.linkBtn} href={slide.link.url}>{slide.link_text}</Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className={styles.buttons}>
          <div className='buttonPrev'>
            <button aria-label='gehe zur vorherigen folie' className={`${styles.sliderButton} ${styles.buttonLeft}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                <path d="M6 1L1 6L6 11" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <div className='buttonNext'>
            <button aria-label='gehe zur nächsten folie' className={`${styles.sliderButton} ${styles.buttonRight}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                <path d="M1 11L6 6L1 1" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </Swiper>
    </div>
  );
};
