import ReactDOM from 'react-dom';
import React, { useState, useEffect, Fragment } from 'react';
import AboutContent from './AboutContent';

const About = () => {
  const [userEmail, setUserEmail] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
    } else {
      fetch('https://api-gym-tracker.azurewebsites.net/apiaccounts/auth/user/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(data => {
          setUserEmail(data.email);
          setLoading(false);
        });
    }
  }, []);

  return (
    <div>
      {loading === false && (
        <Fragment>
          <h1>Dashboard</h1>
          <h2>Hello {userEmail}!</h2>
          <AboutContent/>
        </Fragment>
      )}
      {
        userEmail==='' && (
          <Fragment>
            <h1>Dashboard</h1>
            <h2>Hello </h2>
            <AboutContent/>
          </Fragment>
        )

      }
    </div>
  );
};

export default About;