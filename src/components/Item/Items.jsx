import React from 'react';

import styles from './Items.module.scss';

const Items = ({ name, image }) => {
  return (
    <div className={styles.root}>
      <img className={styles.img} src={image} alt='Shirt' />
      <h2 className={styles.name}>{name}</h2>
    </div>
  );
};

export default Items;
