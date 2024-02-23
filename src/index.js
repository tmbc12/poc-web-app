import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from "./pages/Home/home"
import Searchbar from './pages/Searchbar/searchbar';
import Productpage from './pages/Productpage/productpage';
import Singleproduct from "../src/components/SingleProductPage/singleProductPage"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/search",
    element: <Searchbar />,
  },
  {
    path: "/productpage",
    element: <Productpage />,
  },
  {
    path: "/singleproduct",
    element: <Singleproduct />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

