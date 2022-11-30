import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import css from '../src/css/style.css'
import { firebaseInit } from './firebaseConfig/FirebaseConfig';
firebaseInit();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

