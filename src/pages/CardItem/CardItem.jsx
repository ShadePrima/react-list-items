import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Items from '../../components/Item/Items';
import { getProduct, getSizes } from '../../services/api';
import { firstColors, firstProduct, firstSizes } from '../../services/items';
import styles from './CardItem.module.scss';

const CardItem = () => {
  const { id } = useParams();
  const [items, setItems] = React.useState([]);
  const [colors, setColors] = React.useState(firstColors);
  const [product, setProduct] = React.useState(firstProduct);
  const [changeImg, setChangeImg] = React.useState(0);
  const [sizes, setSizes] = React.useState(firstSizes);
  const [size, setSize] = React.useState({ id: 1, label: 'XS', number: 44 });
  console.log(sizes, 'sizes');
  // console.log(size, 'size');

  // console.log(product, 'product');

  console.log(colors, 'colors');

  React.useEffect(() => {
    if (items.colors) {
      setColors(items.colors);
    }
  }, [items]);

  React.useEffect(() => {
    getProduct(Number(id)).then((res) => {
      setItems(res);
      setProduct(res.colors[0]);
    });
  }, [id]);

  const changeColor = (id) => {
    setProduct(colors[id]);
  };

  const handleChangeImg = () => {
    if (changeImg === 0) {
      setChangeImg(1);
    } else {
      setChangeImg(0);
    }
  };

  React.useEffect(() => {
    getSizes().then((res) => setSizes(res));
  }, []);

  const changeSize = (id) => {
    const currentSize = sizes.slice().filter((obj) => obj.id === id);
    currentSize.map((obj) => setSize(obj, 'changeSize'));
  };

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
            <img src={product.images[changeImg]} alt='' />
            <button onClick={handleChangeImg}>Другой ракурс</button>
          </div>
          <div className={styles.description}>
            <h1 className={styles.title}>{items.name}</h1>
            <div className={styles.colorChange}>
              <h1>Цвет</h1>
              {colors.map((color, index) => (
                <button
                  key={color.id}
                  onClick={() => changeColor(index)}
                  className={
                    product.id === color.id
                      ? styles.ColorBtnActive
                      : styles.ColorBtn
                  }
                >
                  {color.name}
                </button>
              ))}
            </div>
            <h1>Цена: {product.price}</h1>
            <h1>Описание: {product.description}</h1>
            <div className={styles.sizeChange}>
              <h1>
                Размер: {size.label} ({size.number})
              </h1>

              {sizes.map((obj) => (
                <button
                  key={obj.id}
                  onClick={() => changeSize(obj.id)}
                  className={
                    size.id === obj.id ? styles.ColorBtnActive : styles.ColorBtn
                  }
                >
                  {obj.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
