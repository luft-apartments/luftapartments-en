"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import styles from './SliderReviews.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import {
  MdPersonOutline,
  MdPeopleOutline,
  MdSafetyDivider
} from "react-icons/md";
import { FaRegCalendar, FaFaceGrin } from "react-icons/fa";

export const SliderReviews = ({ slides }) => {
  console.log("SLIDESICON: ", slides.amountIcon)
  return (
    <div className="container">
      <Swiper
        loop={true}
        // autoplay={{ delay: 3000 }}
        modules={[Navigation, A11y, Pagination, Autoplay]}
        navigation={{
          nextEl: '.buttonNext',
          prevEl: '.buttonPrev',
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
          type: 'bullets',
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
        }}
        className={styles.slider}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={styles.slide}>
              <div className={styles.slideWrapper}>
                <div className={styles.slideData}>
                  <div className={styles.slideName}>
                    {slide.name}
                  </div>
                  <div className={styles.slideCountry}>
                    <span className={`flag-icon flag-icon-${slide.flag}`}></span>
                    <span className={styles.slideCountryName}>{slide.country}</span>
                  </div>
                  <div className={styles.slidePeriod}>
                    <FaRegCalendar style={{ color: '#1e7ca4', fontSize: '10px' }} className={styles.slidePeriodIcon} />
                    <p>{slide.period}</p>
                  </div>
                  <div className={styles.slideAmount}>
                    {slide.amountDescription}
                  </div>
                </div>
                <div className={styles.slideReview}>
                  {slide.commentGood}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.buttons}>
        <div className='buttonPrev'>
          <button className={`${styles.sliderButton} ${styles.buttonLeft}`}>
            <Image src='/img/arrow-left.png' alt='arrow' width={30} height={30} />
          </button>
        </div>
        <div className='buttonNext'>
          <button className={`${styles.sliderButton} ${styles.buttonRight}`}>
            <Image src='/img/arrow-right.png' alt='arrow' width={30} height={30} />
          </button>
        </div>
      </div>
    </div>
  );
};
