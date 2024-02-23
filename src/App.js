import React from 'react';
import './App.css';
import Home from "./pages/Home/home"
import Searchbar from './pages/Searchbar/searchbar';
import Productpage from './pages/Productpage/productpage';
import { Routes, Route } from 'react-router-dom';
import Singleproduct from "../src/components/SingleProductPage/singleProductPage"
function App() {
  return (
    <div className=" bg-black">
      <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='/search'  element={<Searchbar />} />
        <Route path='/productpage'  element={<Productpage />} />
        <Route path='/singleproduct' element={ <Singleproduct />} />
      </Routes>
    </div>
  );
}

export default App;
