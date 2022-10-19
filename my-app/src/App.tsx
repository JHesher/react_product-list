import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Favorites } from './components/Favorites';
// import Favorites from './components/Favorites/Favorites';
import { ProductListPage } from './pages/ProductListPage';
import { ProductPage } from './pages/ProductPage';

function App() {
  return (
    <div className="App">
      <Favorites />
      <div className="main">
        <Routes>
          <Route path="/" element={ <ProductListPage /> }/>
          <Route path="/product-page" element={ <ProductPage /> }/>
        </Routes>
      </div>
    </div>
  );
};

export default App;
