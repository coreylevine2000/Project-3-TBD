import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const styles = {
  buttonStyle: {
    background: 'Purple',
  },
  headerStyle: {
    background: '#8d4397'
  }
};




const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div style={styles.headerStyle} className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link style={styles.headerStyle} className="text-light" to="/">
            <h1 className="m-0">Ready, Drink, Go!</h1>
          </Link>
          <p className="m-0">Beat the crowds at the bar by ordering your drink ahead of time</p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link style={styles.buttonStyle} className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link style={styles.buttonStyle} className="btn btn-lg btn-light m-2" to="/signup">
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
