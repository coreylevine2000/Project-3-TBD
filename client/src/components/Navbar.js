import React from 'react';

function Navbar({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-bar">
      <li className="nav-item">
        <a
          href="#menu"
          onClick={() => handlePageChange('Menu')}
          className={currentPage === 'Menu' ? 'nav-link active' : 'nav-link'}
        >
          Menu
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#order"
          onClick={() => handlePageChange('Order')}
          className={currentPage === 'Order' ? 'nav-link active' : 'nav-link'}
        >
          Order
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#signup"
          onClick={() => handlePageChange('Signup')}
          className={currentPage === 'Signin' ? 'nav-link active' : 'nav-link'}
        >
          Signup
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link Home' : 'nav-link'}
        >
          Home
        </a>
      </li>
    </ul>
  );
}

export default Navbar;