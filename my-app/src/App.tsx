import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { Favorites } from './components/Favorites';
import { ProductListPage } from './pages/ProductListPage';
import { ProductPage } from './pages/ProductPage';

function App() {
  // const [page, setPage] = useState('');

  // useEffect(() => {
  //   const urlParams = new URLSearchParams(window.location.search);
  //   const productId = urlParams.get("id");
  //   if (productId) {
  //     setPage(productId);
  //   }
  // }, []);

  console.log(window.location.href.includes('/product-page'))
  
  return (
    <div className="App">
      <div className="App__header">
        <div className="App__title">
          {window.location.href.includes('/product-page')
            ? 'Product Page' : 'Products List Page'}
        </div>
      </div>
      <div className="App__main">
        <div className="App__favorites">
          <Favorites />
        </div>
        <div className="App__pages">
        <Routes>
          <Route path="/" element={ <ProductListPage /> }/>
          <Route path="/product-page" element={ <ProductPage /> }/>
        </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
