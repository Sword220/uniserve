import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './App'
import 'materialize-css/dist/css/materialize.min.css'

ReactDOM.render(
  <Router>
    <App />
  </Router>, 
  document.getElementById('root')
);
