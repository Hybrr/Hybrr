import React from 'react';

import { ReactComponent as Fblogo} from '../../assets/fblogo.svg';
import { ReactComponent as Inst} from '../../assets/inst.svg';
import './contact.styles.scss';

const Contact = () => (
    <div className = 'contact'>
        <h1 className = 'contact1'>Contact Us</h1>
        <div className = 'address' data-aos = "flip-left">
            Address:<br></br>Vadodara,Gujarat 
        </div>
        <div className = 'email' data-aos = "flip-right">
            Have Any Query?
            <a href = "mailto:info@hybrr.nerdsploit.com"><br></br>Mail Us</a>
        </div>
         <div className = 'connect'>
            Connect With Us On Social Media!   
        <div className = 'logo' data-aos="fade-down">
            <a href = "https://www.instagram.com/hybrr_/">
                <Inst className = 'inst'/>
            </a>
            <a href = "https://www.facebook.com/Hybrr-108302441072334">
                <Fblogo className = 'fblogo'/>
            </a>
        </div>
        </div> 
        <div className = 'rights'>
             	&#169; 2021 All rights reserved with hybrr  
        </div>    
    </div>
);

export default Contact;