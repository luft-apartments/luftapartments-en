import React from 'react';
import styles from './GridBlock.module.scss';

export const GridBlock = ({ children }) => {
  // Преобразовать children в массив, если они не являются массивом
  const childrenArray = React.Children.toArray(children);

  return (
    <div className="container">
      <div className={styles.gridWrapper}>
        {childrenArray.map((child, index) => (
          <div key={index} className={styles.grid}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};