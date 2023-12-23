
import Header from './component/Header';
import Home from './component/Home';
import Coins from './component/Coins';
import CoinDetails from './component/CoinDetails'

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Exchanges from './component/Exchanges';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coins' element={<Coins />} />
        <Route path='/home' element={<Home />} />
        <Route path='/exchanges' element={<Exchanges />} />
        <Route path='/coin/:id' element={<CoinDetails />} />

      </Routes>
    </Router>
  );
}

export default App;
