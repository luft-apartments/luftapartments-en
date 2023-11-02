import React from 'react'
import styles from './MediaBlock.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
// Импортируйте иконки Font Awesome, которые вы используете
import { faMessage, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
// Добавьте иконки в библиотеку FontAwesome
library.add(faMessage, faPhone, faEnvelope);

export const MediaBlock = ({
  icon,
  title,
  textStart,
  phone,
  email,
  textEnd,
  weekdays,
  weekends
}) => {

  const phoneReplaced = phone.replaceAll(' ', '');

  return (
    <div className={styles.mediaBlock}>
      <div className={styles.mediaBlockWrapper}>
        <div className={styles.iconBlock}>
          {icon && <FontAwesomeIcon icon={icon} style={{ color: '#eeeeee', fontSize: '50px' }} className={styles.icon} />}
        </div>
        <div className={styles.textBlock}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.text}>
            <p className={styles.textString}>
              <span>{textStart} </span>
              {phone && <span><Link href={`tel:${phoneReplaced}`} className={styles.phone}>{phone} </Link></span>}
              {/* после емейла убрал пробел в коде */}
              {email && <span><Link href={`mailto:${email}`} className={styles.email}>{email}</Link></span>}
              <span>{textEnd}</span>
            </p>
            <div className={styles.days}>
              <p className={styles.day}>Montag bis Freitag:</p>
              <p className={styles.weekdays}>{weekdays}</p>
            </div>
            <div className={styles.days}>
              <p className={styles.day}>Samstag:</p>
              <p className={styles.weekends}>{weekends}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
