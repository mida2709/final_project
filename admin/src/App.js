import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ViewProduct from './components/ViewProducts'
import AddProduct from './components/AddProduct';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ViewProduct />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/VievProduct" element={<ViewProduct />} />
      </Routes>
    </Router>
  );
};

export default App;
