import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header'
import Products from './components/Products';
import { Route, Routes } from 'react-router-dom';
import CartPage from './components/CartPage';
import Home from './components/Home';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <div className="App">
      <ToastContainer theme="colored"></ToastContainer>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
