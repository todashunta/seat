import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Seat from './Seat.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Seat />
  </React.StrictMode>
);