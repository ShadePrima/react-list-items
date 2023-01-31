import React from 'react';
import { Link } from 'react-router-dom';
import Items from '../../components/Item/Items';
import { getProducts, products } from '../../services/api';
import styles from './Home.module.scss';

const Home = () => {
  const [items, setItems] = React.useState(products);

  React.useEffect(() => {
    getProducts().then((res) => setItems(res));
  }, []);

  const allItems = items.map((item) => (
    <div key={item.id}>
      <Link to={`/${item.id}`}>
        <Items name={item.name} image={item.colors[0].images[0]} />
      </Link>
    </div>
  ));

  return (
    <div className='container'>
      <div className={styles.root}>
        <h1 className={styles.title}>Список товаров</h1>
        <div className={styles.listItems}>{allItems}</div>
      </div>
    </div>
  );
};

export default Home;
