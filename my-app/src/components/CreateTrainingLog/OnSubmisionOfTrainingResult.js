import React from 'react';
import ReactDOM from 'react-dom';
function sendObjectsToApi(formdata){
  for (const obj of formdata) {
      fetch("https://api-gym-tracker.azurewebsites.net/plansapi/recordresults/", {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(obj)
      })
    .then((response) => {
    return response.json();
    })
    .then((data) => {
    window.location.replace('https://gym-tracker-app.azurewebsites.net/Charts');
}
);
    }
  }

export default sendObjectsToApi;