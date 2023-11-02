import React from 'react'
import styles from './ListCustom.module.scss';

export const ListCustom = ({ items }) => {
  return (
    <ul className={styles.list}>
      {items.map((item, index) => (
        <li className={styles.listItem} key={index}>
          {item.strongText && <strong>{item.strongText}</strong>}
          {item.itemText}
        </li>
      ))}
    </ul>
  )
}
