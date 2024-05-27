import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './localizer/i18next';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <React.Suspense fallback="loading">
    <App />
    </React.Suspense>
  </React.StrictMode>
);