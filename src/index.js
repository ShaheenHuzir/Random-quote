import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <div>
  <BrowserRouter basename={window.location.pathname || ''}>
  <Route exact path="/" component={App} />
</BrowserRouter>
    <App />
    </div>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
