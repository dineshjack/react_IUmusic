import React from 'react';

import './App.css';
import Header from './components/Header'
import ParentComp from './components/ParentComp';
import Nav from './components/Nav';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
    <title>React my App</title>
    
      <Route exact path="/" component={Nav}/>
      <Route path="/home" component={Header} />
      <Route path="/about" component={ParentComp} />
    </div>
    </Router>
  );

  
}

export default App;
