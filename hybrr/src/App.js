import React from 'react';
import { Link, NavLink, Route, Switch, Router, Redirect } from 'react-router-dom';

import Service from './component/service/service.component';
import HomePage from './pages/homepage/homepage.component';
import Header from './component/header/header.component';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className='Main-Page'>
        <Service />
        <HomePage />
      </div>
    </div>
  );
}


export default App;
