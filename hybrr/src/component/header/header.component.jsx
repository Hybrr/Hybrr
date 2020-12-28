import React from 'react';

import { Link, NavLink, Route } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Inst } from '../../assets/inst.svg';

import './header.styles.scss';

const Header = () => (
    <div className = 'header'>
        <Logo className = 'logo'/>
        <Inst className = 'inst'/>
    </div>
    
);

export default Header;