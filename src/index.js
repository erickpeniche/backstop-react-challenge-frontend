import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';

const rootElement = document.getElementById('app');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement,
);
