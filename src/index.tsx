import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './main/App';
import reportWebVitals from './reportWebVitals';
import ObjectManager from './object-manager/ObjectManager';
import data from './data.json';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
    <ObjectManager data={JSON.parse(JSON.stringify(data))}/>
  </React.StrictMode>
);

reportWebVitals();
