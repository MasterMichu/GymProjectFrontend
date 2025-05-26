import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import classes from './index.css';
import App from './App';
import backgroundimg from  "./public/background.jpeg";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
document.body.style.background= `url(${backgroundimg})`;
document.body.style.height="100%";
document.body.style.backgroundSize="cover";


root.render(
  <BrowserRouter>
    <App />
   </BrowserRouter>


);
/*
import _ from 'lodash';
function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
*/