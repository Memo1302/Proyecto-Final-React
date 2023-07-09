import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import CartContent from './components/CartContent';
import DataProvider from './components/DataContext';
import NavBar from './components/NavBar';
import Products from './pages/Products';



const MainRouter = () => {
  return (
    <DataProvider>
    <Router>
      <NavBar />
      <Products />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<CartContent />} />
        </Routes>
    </Router>
    </DataProvider>
  )
}

export default MainRouter