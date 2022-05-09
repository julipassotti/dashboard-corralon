
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Users from './components/Users';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import UserDetail from './components/UserDetail';
import Homes from './pages/Homes';

function App() {
  return (
    <>


      <main>

        <Routes>

          <Route path='/' element={<Homes />} />
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
