import React from 'react';

function Navbar({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-bar">
      <li className="nav-item">
        <a
          href="#liquer"
          onClick={() => handlePageChange('Liquer')}
          className={currentPage === 'Liquer' ? 'nav-link active' : 'nav-link'}
        >
          Liquer
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Beer"
          onClick={() => handlePageChange('Beer')}
          className={currentPage === 'Beer' ? 'nav-link active' : 'nav-link'}
        >
          Beer
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#NonAlcoholic"
          onClick={() => handlePageChange('NonAlcoholic')}
          className={currentPage === 'NonAlcoholic' ? 'nav-link active' : 'nav-link'}
        >
          NonAlcoholic
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