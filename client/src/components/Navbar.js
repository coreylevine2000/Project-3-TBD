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
          MENU
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#order"
          onClick={() => handlePageChange('Order')}
          className={currentPage === 'Order' ? 'nav-link active' : 'nav-link'}
        >
          Your Order
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
      <li className="nav-item">
        <a
          href="#profile"
          onClick={() => handlePageChange('History')}
          className={currentPage === 'Home' ? 'nav-link History' : 'nav-link'}
        >
          Past Orders
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#loginform"
          onClick={() => handlePageChange('LoginForm')}
          className={currentPage === 'LoginForm' ? 'nav-link LoginForm' : 'nav-link'}
        >
         Login!
        </a>
      </li>
    </ul>
  );
}

export default Navbar;