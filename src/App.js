import logo from './Logo-corralon.png';
import './App.css';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import UserDetail from './components/UserDetail';

function App() {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav className="app-nav">      
          <Link to='/users'>Usuarios</Link>
          <Link to='/products'>Productos</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<Users />} />
          <Route path='/users/:id' element={<UserDetail />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<ProductDetail />} />
        </Routes>
      </main>
      
    </>
  );
}

export default App;
