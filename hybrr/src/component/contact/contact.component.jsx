import React from 'react';

import './contact.styles.scss';

const Contact = () => (
    <div className = 'contact'>
        <div className = 'address'>
            Address:<br></br>
            Vadodara,Gujarat 
        </div>
        <div className = 'email'>
            <a href = "mailto:info@hybrr.nerdsploit.com">Mail Us</a>
        </div>
    </div>
);

export default Contact;