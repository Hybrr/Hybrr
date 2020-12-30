import React from 'react';
import { BrowserRouter as NavLink, Switch, Route, Router, Link, Redirect } from 'react-router-dom';


import Service from './component/service/service.component';
import HomePage from './pages/homepage/homepage.component';
import Header from './component/header/header.component';
import AboutUs from './component/aboutus/aboutus.component';
import Tech from './component/techweaspire/tech.component';
import MoreHybrr from './component/moreabouthybrr/morehybrr.component';
import Contact from './component/contact/contact.component';
import Pricing from './pages/pricing/pricing.component';
import QuickLook from './component/quicklook/quicklook.component';

import './App.css';
import SLIDER_DATA from './data-hybrr/slider.data';


function App() {
  return (
    <div>
      <Header />
      <div className='Main-Page'>
        <QuickLook slides={SLIDER_DATA} />
        <Service />
        <HomePage />
        <Pricing />
        <AboutUs />
        <MoreHybrr />
        <Tech />
        <Contact />
      </div>
    </div>
  );
}


export default App;
