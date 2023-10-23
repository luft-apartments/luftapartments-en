'use client';
import React from 'react'
import styles from './AllApartmentsBlock.module.scss'
import Image from 'next/image';
import Link from 'next/link';

export const AllApartmentsBlockSlider = ({ data }) => {
  // console.log(data)
  return (
    <div className={styles.AllApartmentsBlockSlider}>
      <div className="container">
        <div className={styles.apartments}>
          {data.map((apartment) => (
            <div
              key={apartment.id}
              className={styles.apartment}
            >
              <Link
                href={apartment.uri}
                className={styles.apartmentLink}
              >
                {apartment.featuredImage && (
                  <Image
                    width={500}
                    height={500}
                    src={apartment.featuredImage.node.sourceUrl}
                    alt={apartment.title}
                    className={styles.apartmentImage}
                  />
                )}
                <div className={styles.apartmentData}>
                  {apartment.title && <h2 className={styles.apartmentTitle}>{apartment.title}</h2>}
                  <button className={styles.button}>View apartment</button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
