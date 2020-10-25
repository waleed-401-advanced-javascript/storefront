import React from 'react';
import './App.css';
import Header from './components/Header';
import Categories from './components/storefront/Categories';
import Products from './components/storefront/Products';
import Footer from './components/Footer';


function App() {
  return (
    <>
     <Header />
      <Categories />
      <Products />
    <Footer />
    </>
);
}

export default App;