import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import "./bootstrap.css";
import reportWebVitals from './reportWebVitals';
=======
import './index.css';

import App from './App';
import {Provider} from 'react-redux'
import store from './Store';
>>>>>>> 6a3ae1c6f0c8f6eb57332fc5333bedacffbe0b54

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
