import ReactDOM from 'react-dom';
import React, { useState, useEffect, Fragment } from 'react';

const Logout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('token') == null) {
      window.location.replace('https://gym-tracker-app.azurewebsites.net/login');
    } else {
      setLoading(false);
    }
  }, []);

  const handleLogout = e => {
    e.preventDefault();

    fetch('https://api-gym-tracker.azurewebsites.net/apiaccounts/auth/logout/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        localStorage.clear();
        window.location.replace('https://gym-tracker-app.azurewebsites.net/login');
      });
  };

  return (
    <div>
      {loading === false && (
        <Fragment>
          <h1>Are you sure you want to logout?</h1>
          <input type='button' value='Logout' onClick={handleLogout} />
        </Fragment>
      )}
    </div>
  );
};

export default Logout;