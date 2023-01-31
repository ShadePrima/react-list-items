import React from 'react';
import { Route, Routes } from 'react-router-dom';

import CardItem from './pages/CardItem/CardItem';
import Home from './pages/Home/Home';
import { getProducts, products } from './services/api';

import './styles/main.scss';

function App() {
  const [items, setItems] = React.useState(products);

  React.useEffect(() => {
    getProducts().then((res) => setItems(res));
  }, []);

  return (
    <div>
      <Routes>
        <Route path='' element={<Home items={items} />} />
        <Route path='/:id/' element={<CardItem items={items} />} />
      </Routes>
    </div>
  );
}

export default App;
