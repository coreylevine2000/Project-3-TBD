import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import Signup from '../pages/Signup';
import Order from '../pages/Order';
import History from '../pages/History';

import Header from "./Header";
import Footer from "./Footer";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
        return <Home />;
      }
    if (currentPage === 'Menu') {
      return <Menu />;
    }
    if (currentPage === 'Signup') {
      return <Signup />;
    }
    if (currentPage === 'Order') {
      return <Order />;
    }
    if (currentPage === 'History') {
      return <History />;
    }
    return <Home />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header />
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}
