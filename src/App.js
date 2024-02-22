import React from 'react';
import './App.css';
import Home from "./pages/Home/home"
import Searchbar from './pages/Searchbar/searchbar';
import Productpage from './pages/Productpage/productpage';
function App() {
  return (
    <div className=" bg-black">
      <Home />
      {/* <Searchbar /> */}
      {/* <Productpage /> */}
    </div>
  );
}

export default App;
