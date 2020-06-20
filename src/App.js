import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import HomePage from './components/WebPAges/HomePage'
import RegisterPage from './components/WebPAges/RegisterPage'

function App() {
  return (
    <div className="ui container">
      <Route path="/" exact component= {HomePage}></Route>
      <Route path="/register" exact component= {RegisterPage}></Route>
    </div>
  );
}

export default App;
