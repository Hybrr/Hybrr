import React from 'react';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import './header.styles.scss';

const Header = () => (
    <div className = 'header'>
        <Logo className = 'logo'/>
    </div>
);

export default Header;