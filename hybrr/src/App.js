import React from 'react';

import Service from './component/service/service.component';
import HomePage from './pages/homepage/homepage.component';

import './App.css';

function App() {
  return (
    <div className='Main-Page'>
      <Service />
      <HomePage />
    </div>
  );
}


export default App;
