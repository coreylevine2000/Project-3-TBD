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
          Menu better get a drink
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#order"
          onClick={() => handlePageChange('Order')}
          className={currentPage === 'Order' ? 'nav-link active' : 'nav-link'}
        >
          Order Yo Sheet
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#signup"
          onClick={() => handlePageChange('Signup')}
          className={currentPage === 'Signin' ? 'nav-link active' : 'nav-link'}
        >
          Signup for this
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link Home' : 'nav-link'}
        >
          Home -E
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#profile"
          onClick={() => handlePageChange('History')}
          className={currentPage === 'Home' ? 'nav-link History' : 'nav-link'}
        >
          Your previous solutions
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#loginform"
          onClick={() => handlePageChange('LoginForm')}
          className={currentPage === 'LoginForm' ? 'nav-link LoginForm' : 'nav-link'}
        >
         One of us, One of us!
        </a>
      </li>
    </ul>
  );
}

export default Navbar;