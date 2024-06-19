

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
import men_banner from './components/Assets/all2.png';
import Service from './components/Assets/java2.jpg';
import kids_banner from './components/Assets/baby3.jpeg';
import Benefits from './components/Assets/benefits.jpg';
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
          path='/about us'
          element={<Shopcategory banner={men_banner} category='about us' />}
        />
        <Route
          path='/Services'
          element={<Shopcategory banner={Service} category='Services' />}
        />
        <Route
          path='/benefits'
          element={<Shopcategory banner={Benefits} category='benefits' />}
        />
         <Route
          path='/Services'
          element={<Shopcategory banner={kids_banner} category='Services' />}
        />
        <Route
        path='/enrollment'
        element={<Shopcategory banner={kids_banner} category='enrollment' />}
      />

         <Route
          path='/contact us'
          element={<Shopcategory banner={kids_banner} category='contacts us' />}
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
