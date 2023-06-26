import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HerosProvider } from '../src/store/contexts'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HerosProvider>
    <App />
  </HerosProvider>
);

reportWebVitals();
