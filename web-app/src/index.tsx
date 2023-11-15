import React from 'react';
import ReactDOM from 'react-dom/client';
import "reset-css"; // init css
// UI framework
import "./assets/styles/global.scss" // UI global
// UI component
import App from './App';
// import Router from "./router/index_current"
import {BrowserRouter} from "react-router-dom"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/*<Router />*/}
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>
);

