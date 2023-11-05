"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Pagination, Autoplay } from 'swiper/modules';
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
  return (
    <div className="container">
      <Swiper
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[A11y, Pagination, Autoplay]}
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
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
                    <FaRegCalendar className={styles.slidePeriodIcon} />
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
    </div>
  );
};
