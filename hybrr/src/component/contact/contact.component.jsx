import React from 'react';

import './contact.styles.scss';

const Contact = () => (
    <div className = 'contact'>
        <h1 className = 'contact1'>Contact Us</h1>
        <div className = 'address' data-aos = "flip-left">
            Address:<br></br>Vadodara,Gujarat 
        </div>
        <div className = 'email' data-aos = "flip-right">
            <br></br>Have Any Query!
            <a href = "mailto:info@hybrr.nerdsploit.com"><br></br>Mail Us</a>
        <div className = 'rights'>
             	&#169; 2021 All right reserved with hybrr  
            </div>    
        </div>
    </div>
);

export default Contact;