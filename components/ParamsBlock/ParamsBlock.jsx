import React from 'react';
import styles from './ParamsBlock.module.scss';
import { MdOutlineBed, MdOutlineDesk, MdWc, MdBalcony, MdOutlineElevator, MdDirectionsCar, MdOutlineSignalWifi4Bar } from "react-icons/md";

export const ParamsBlock = ({
  balcony,
  bedrooms,
  equipment,
  furniture,
  internet,
  parking,
  wc
}) => {
  return (
    <div className={styles.paramsBlock}>
      <div className="container">
        {/* <h2 className={styles.title}>Immobilienparameter</h2> */}
        <div className={styles.items}>
          <div className={styles.item}>
            <MdBalcony style={{ color: '#fff', fontSize: '20px' }} />
            <p className={styles.text}>Balcony: <span>{balcony}</span></p>
          </div>
          <div className={styles.item}>
            <MdOutlineBed style={{ color: '#fff', fontSize: '20px' }} />
            <p className={styles.text}>Bedrooms: <span>{bedrooms}</span></p>
          </div>
          <div className={styles.item}>
            <MdOutlineDesk style={{ color: '#fff', fontSize: '20px' }} />
            <p className={styles.text}>Kitchen: <span>{equipment}</span></p>
          </div>
          <div className={styles.item}>
            <MdOutlineDesk style={{ color: '#fff', fontSize: '20px' }} />
            <p className={styles.text}>Furniture: <span>{furniture}</span></p>
          </div>
          <div className={styles.item}>
            <MdOutlineSignalWifi4Bar style={{ color: '#fff', fontSize: '20px' }} />
            <p className={styles.text}>Internet: <span>{internet}</span></p>
          </div>
          {/* <div className={styles.item}>
            <MdDirectionsCar style={{ color: '#fff', fontSize: '20px' }} />
            <p className={styles.text}>Parkplatz: <span>{parking}</span></p>
          </div> */}
          <div className={styles.item}>
            <MdWc style={{ color: '#fff', fontSize: '20px' }} />
            <p className={styles.text}>WC: <span>{wc}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};
