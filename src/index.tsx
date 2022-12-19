import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Global from './layouts/Global/Global.layout';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Global>
      {App}
    </Global>
  </React.StrictMode>
);

reportWebVitals();
