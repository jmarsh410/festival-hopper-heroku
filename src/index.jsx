import React from 'react';
import { render, hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import utils from './utils/utils';
import './styles/normalize.css';
import './index.css';

const renderMethod = utils.isClientSide() ? hydrate : render;

renderMethod(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
