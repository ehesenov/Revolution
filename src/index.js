import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Offers from './Offers';
import Header from "./Header"
import Menu from "./Menu"
import Contact from './Contact';
import configureStore from './redux/redux';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';

const store=configureStore()

ReactDOM.render(

  <React.StrictMode>
  <BrowserRouter>
  <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
   </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
