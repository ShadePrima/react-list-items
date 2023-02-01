import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Items from '../../components/Item/Items';
import { getProduct } from '../../services/api';
import { firstColors, firstProduct } from '../../services/items';
import styles from './CardItem.module.scss';

const CardItem = () => {
  const { id } = useParams();
  const [items, setItems] = React.useState([]);
  const [colors, setColors] = React.useState(firstColors);
  const [product, setProduct] = React.useState(firstProduct);
  // console.log(product, 'product');
  console.log(colors, 'colors');
  // console.log(item, 'items');

  React.useEffect(() => {
    if (items.colors) {
      setColors(items.colors);
    }
  }, [items]);

  React.useEffect(() => {
    getProduct(Number(id)).then((res) => {
      setItems(res);
      setProduct(res.colors[0]);
      console.log(res.colors[0], 'res');
    });
  }, [id]);

  const changeColor = (id) => {
    console.log(colors[id], 'changeColr');
    setProduct(colors[id]);
  };
  // console.log(items.filter());

  if (!product) {
    return 'Loading ...';
  }

  return (
    <div className='container'>
      <div className={styles.root}>
        <Link to='/'>
          <button className='button'>Back</button>
        </Link>

        <div className={styles.card}>
          <div className={styles.image}>
            <img src={product.images[0]} alt='' />
          </div>
          <div className={styles.description}>
            <h1 className={styles.title}>{items.name}</h1>
            <div className={styles.colorChange}>
              <h1>Цвет</h1>
              <button
                onClick={() => changeColor(0)}
                className={styles.ColorBtn}
              >
                {colors[0].name}
              </button>
              <button
                onClick={() => changeColor(1)}
                className={styles.ColorBtn}
              >
                {colors[1].name}
              </button>
              <button
                onClick={() => changeColor(2)}
                className={styles.ColorBtn}
              >
                {colors[2].name}
              </button>
            </div>
            <h1>Цена: {product.price}</h1>
            <h1>Описание: {product.description}</h1>
            <h1>Размеры</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
