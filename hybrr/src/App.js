import React from 'react';


import Service from './component/service/service.component';
import HomePage from './pages/homepage/homepage.component';
import Header from './component/header/header.component';
import AboutUs from './component/aboutus/aboutus.component';
import Tech from './component/techweaspire/tech.component';
import MoreHybrr from './component/moreabouthybrr/morehybrr.component';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className='Main-Page'>
        <Service />
        <HomePage />
        <AboutUs />
        <MoreHybrr />
        <Tech />
      </div>
    </div>
  );
}


export default App;
