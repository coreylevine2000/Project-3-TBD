import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
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
          href="#Liquor"
          onClick={() => handlePageChange('Liquor')}
          className={currentPage === 'Liquor' ? 'nav-link active' : 'nav-link'}
        >
          Liquor
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#NonAlocoholic"
          onClick={() => handlePageChange('NonAlocoholic')}
          className={currentPage === 'NonAlocoholic' ? 'nav-link active' : 'nav-link'}
        >
          NonAlocoholic
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
