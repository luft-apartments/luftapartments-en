'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import styles from './DividerBlock.module.scss';

// Импортируйте иконки Font Awesome, которые вы используете
import { faHouseUser, faSquare, faBath, faTv, faWifi, faBed, faUtensils, faTrainSubway, faLocationArrow, faGrinStars } from '@fortawesome/free-solid-svg-icons';

// Добавьте иконки в библиотеку FontAwesome
library.add(faHouseUser, faSquare, faBath, faTv, faWifi, faBed, faUtensils, faTrainSubway, faLocationArrow, faGrinStars);

export const DividerBlock = ({ background, icon }) => {
  return (
    <div className={styles.dividerBlock}>
      <div style={{ background: background }} className={styles.dividerBlockLine}></div>
      <div className={styles.dividerBlockIcon}>
        {/* Отображение иконки с помощью FontAwesomeIcon */}
        {icon && <FontAwesomeIcon icon={icon} style={{ color: background, fontSize: '20px' }} />}
      </div>
      <div style={{ background: background }} className={styles.dividerBlockLine}></div>
    </div>
  );
};
