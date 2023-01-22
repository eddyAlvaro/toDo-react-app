import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/index.js';

const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);
root.render(
    <App />
);

