import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/ProdukReducers';
import ProductDetail from './services-page/productDetail';

import Home from './home-page/Home';
import Service1 from './services-page/Service1';
import Service2 from './services-page/Service2';
import Service3 from './services-page/Service3';

const store = configureStore({
  reducer: rootReducer,
});

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service1/*" element={<Service1 />} />
          <Route path="/service2/*" element={<Service2 />} />
          <Route path="/service3/*" element={<Service3 />} />
          <Route path="/service1/product/:id" element={<ProductDetail />} />
          <Route path="/service2/product/:id" element={<ProductDetail />} />
          <Route path="/service3/product/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
