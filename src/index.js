import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Welcome from './components/Welcome';
import MainPage from './components/MainPage';
import 'bootstrap/dist/css/bootstrap.css';




// import 'bootstrap/dist/css/SideMenuBar/bootstrap.bundle.min.js';
// import 'bootstrap/dist/css/SideMenuBar/bootstrap.min.css';
// import 'bootstrap/dist/css/SideMenuBar/jquery.min.js';
// import 'bootstrap/dist/css/SideMenuBar/simple-sidebar.css';

import './SideBarAssets/bootstrap.bundle.min.js';
import './SideBarAssets/bootstrap.min.css';
import './SideBarAssets/jquery.min.js';
import './SideBarAssets/simple-sidebar.css';
import './SideBarAssets/toggleBtn'


ReactDOM.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
