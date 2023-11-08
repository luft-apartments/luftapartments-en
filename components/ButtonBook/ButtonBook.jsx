import Link from 'next/link'
import React from 'react'
import styles from './ButtonBook.module.scss';

export const ButtonBook = ({ label, destination, align }) => {

  const alignMap = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  }

  return (
    <div className={alignMap[align]}>
      <Link className={styles.buttonBook} href={destination}>
        {label}
      </Link>
    </div>
  )
}
