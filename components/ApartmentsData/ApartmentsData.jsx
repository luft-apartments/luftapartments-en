import React from 'react'
import styles from './ApartmentsData.module.scss'
import { FaLocationArrow, FaDog } from "react-icons/fa6";

export const ApartmentsData = ({ adress, area, cost, floor, pets, rooms }) => {
  return (
    <div className={styles.apartmentsData}>
      <div
        itemScope
        itemType="http://schema.org/Offer"
      >
        <h2 itemProp="price" className={styles.title}>
          Preis: ab <span>{cost}€</span> / Nacht
        </h2>
        <meta itemProp="priceCurrency" content="EUR" />
      </div>
      <div className={styles.dataItems}>
        <div className={styles.dataItem}>
          <p className={styles.text}>Zimmer: <span>{rooms}</span></p>
        </div>
        <div className={styles.dataItem}>
          <p className={styles.text}>Wohnfläche: <span>{area} m²</span></p>
        </div>
        <div className={styles.dataItem}>
          <p className={styles.text}>Etage: <span>{floor}</span></p>
        </div>
        <div className={`${styles.dataItem} ${styles.dataItemFlex}`}>
          <FaDog style={{ color: '#1e7ca4', fontSize: '20px' }} />
          <p className={styles.text}>{pets}</p>
        </div>
        <div className={`${styles.dataItem} ${styles.dataItemFlex}`}>
          <FaLocationArrow style={{ color: '#1e7ca4', fontSize: '20px' }} />
          <p className={styles.textValue}>{adress}</p>
        </div>
      </div>
    </div>
  )
}
