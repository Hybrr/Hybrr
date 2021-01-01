import React from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as Logo} from '../../assets/logo.svg';
import { ReactComponent as Fblogo} from '../../assets/fblogo.svg';
import { ReactComponent as Inst } from '../../assets/inst.svg';


import './header.styles.scss';

const Header = () => (
    <div className = 'header'>
        <Logo className = 'header-logo'/>
        <div className = 'logo'>
            <a href = "https://www.instagram.com/hybrr_/">
                <Inst className = 'inst'/>
            </a>
            <a href = "https://www.facebook.com/Hybrr-108302441072334">
                <Fblogo className = 'fblogo'/>
            </a>
        </div>
     </div>
    
);

export default Header;