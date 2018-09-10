import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import unregister  from './registerServiceWorker';
unregister();

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
//registerServiceWorker();
