import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import styles from './IconBlock.module.scss';

// Импортируйте иконки Font Awesome, которые вы используете
import { faHouseUser, faSquare, faBath, faTv, faWifi, faBed, faUtensils, faTrainSubway } from '@fortawesome/free-solid-svg-icons';

// Добавьте иконки в библиотеку FontAwesome
library.add(faHouseUser, faSquare, faBath, faTv, faWifi, faBed, faUtensils, faTrainSubway);

export const IconBlock = ({ background, icon, text }) => {
  return (
    <div
      className={styles.iconBlock}
      style={{ background }}>
      <div className={styles.iconBlockIcon}>
        {/* Отображение иконки с помощью FontAwesomeIcon */}
        {icon && <FontAwesomeIcon icon={icon} style={{ color: '#1e7ca4', fontSize: '50px' }} />}
      </div>
      <div className={styles.iconBlockText}>
        <p>{text}</p>
      </div>
    </div>
  );
};
