import { Route, Routes } from 'react-router-dom';
import CardItem from './pages/CardItem/CardItem';
import Home from './pages/Home/Home';
import './styles/main.scss';

function App() {
  return (
    <div>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/:id' element={<CardItem />} />
      </Routes>
    </div>
  );
}

export default App;
