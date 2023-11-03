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
            <p className={styles.text}>Balkon: <span>{balcony}</span></p>
          </div>
          <div className={styles.item}>
            <MdOutlineBed style={{ color: '#fff', fontSize: '20px' }} />
            <p className={styles.text}>Schlafzimmer: <span>{bedrooms}</span></p>
          </div>
          <div className={styles.item}>
            <MdOutlineDesk style={{ color: '#fff', fontSize: '20px' }} />
            <p className={styles.text}>Ausstattung: <span>{equipment}</span></p>
          </div>
          <div className={styles.item}>
            <MdOutlineDesk style={{ color: '#fff', fontSize: '20px' }} />
            <p className={styles.text}>Möbel: <span>{furniture}</span></p>
          </div>
          <div className={styles.item}>
            <MdOutlineSignalWifi4Bar style={{ color: '#fff', fontSize: '20px' }} />
            <p className={styles.text}>Internet: <span>{internet}</span></p>
          </div>
          <div className={styles.item}>
            <MdDirectionsCar style={{ color: '#fff', fontSize: '20px' }} />
            <p className={styles.text}>Parkplatz: <span>{parking}</span></p>
          </div>
          <div className={styles.item}>
            <MdWc style={{ color: '#fff', fontSize: '20px' }} />
            <p className={styles.text}>WC mit Dusche oder Bad: <span>{wc}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};
