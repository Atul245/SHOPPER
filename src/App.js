import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ShopCategory from './pages/ShopCategory';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/Footer/Footer';
import kids_banner from './components/Assets/banner_kids.png';
import women_banner from './components/Assets/banner_women.png';
import men_banner from './components/Assets/banner_mens.png';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kids" element={<ShopCategory banner={kids_banner} category="Kids" />} />
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="Women" />} />
          <Route path="/men" element={<ShopCategory banner={men_banner} category="Men" />} />
          <Route path="/product" element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
