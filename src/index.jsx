import React from 'react';
import { render, hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import utils from './utils/utils';
import './styles/normalize.css';
import './index.css';

const renderMethod = utils.isClientSide() ? render : hydrate;

renderMethod(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
