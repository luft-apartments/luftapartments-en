import React from 'react'
import styles from './Carousel.module.scss';
import Slider from 'react-infinite-logo-slider'

export const Carousel = ({ slides }) => {
  return (
    <div className={styles.carousel}>
      {/* <div className="container"> */}
      <Slider
        width="400px"
        duration={100}
        spacing={0}
        pauseOnHover={true}
        blurBorders={true}
        blurBoderColor={'#fff'}
        className={styles.slider}
      >
        {slides.map((slide, index) => (
          <Slider.Slide
            key={slide.id}
            className={styles.slide}
          >
            <div className={styles.slideContent}>
              <p><span>{slide.name}</span> - <span>{slide.distance} km</span></p>
            </div>
          </Slider.Slide>
        ))}
      </Slider>
      {/* </div> */}
    </div>
  )
}
