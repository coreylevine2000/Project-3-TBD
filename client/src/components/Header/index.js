import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

/* <link rel="stylesheet" herf="css/styles.css" */

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="text-light mb-4 flex-row align-center">
      <div className="headerStyle container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="header-link text-light" to="/">
            <h1 className="m-0">Ready, Drink, Go!</h1>
          </Link>
          <p className="m-0">Beat the crowds at the bar by ordering your drink ahead of time</p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/MyDrinks">
                {Auth.getProfile().data.username}'s Cart
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2 purple-button" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2 purple-button" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
