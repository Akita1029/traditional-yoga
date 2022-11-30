import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/scss/custom.scss';
import '../node_modules/hover.css/css/hover-min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

