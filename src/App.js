

import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/footer/footer';
import Shopcategory from './pages/Shopcategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Loginsingup from './pages/Loginsignup';
import Hero from './components/Hero/Hero'; // Import Hero component for homepage
import Popular from './components/Popular/Popular'; // Import Popular component for homepage
import Offers from './components/offers/offers'; // Import Offers component for homepage
import NewCollections from './components/newCollections/newCollections'; // Import NewCollections component for homepage
import NewsLetter from './components/NewsLetter/NewsLetter'; // Import NewsLetter component for homepage
import men_banner from './components/Assets/men7.jpg';
import women_banner from './components/Assets/beauti.jpg';
import kids_banner from './components/Assets/baby3.jpeg';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* Route for homepage */}
        <Route
          exact
          path='/'
          element={
            <>
              <Hero />
              <Popular />
              <Offers />
              <NewCollections />
              <NewsLetter />
            </>
          }
        />
        {/* Routes for other pages */}
        <Route
          path='/mens'
          element={<Shopcategory banner={men_banner} category='men' />}
        />
        <Route
          path='/womens'
          element={<Shopcategory banner={women_banner} category='women' />}
        />
        <Route
          path='/kids'
          element={<Shopcategory banner={kids_banner} category='kid' />}
        />
        <Route path='/product' element={<Product />} />
        <Route path='/card' element={<Cart />} />
        <Route path='/login' element={<Loginsingup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
