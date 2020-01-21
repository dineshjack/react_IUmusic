import React from 'react'
import logo from './logo.svg';
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import Header from './components/Header'


const routing = (
    <Router>
      <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        
      </ul>
        <Route path="/" component={App} />
        <Route path="/users" component={Header} />
       
      </div>
    </Router>
  )

export default Routes
