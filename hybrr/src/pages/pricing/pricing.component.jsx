import React from 'react';

import PRICING_DATA from '../../data-hybrr/pricing.data';

import './pricing.styles.scss';

class Pricing extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            data: PRICING_DATA
        };
    }

    render(){
        return (
                <div className = 'type'>
                    {
                    this.state.data.map
                    (data => 
                        (
                    <h1 key = {data.id}>
                    <div className = 'content1'>
                        <p>
                        <div className = 'business' data-aos = "fade-left">
                        {data.type}
                        </div>
                        <br></br>
                        <div data-aos = "fade-right">
                        {data.price}
                        <br></br>
                        {data.service}
                        <br></br>
                        {data.period}
                        </div>
                        </p>
                        <div className = 'mail' data-aos = 'fade-up'>
                            <a href = "mailto:info@hybrr.nerdsploit.com">
                            Mail Us
                            </a>
                        </div>
                    </div>
                    </h1>
                ))}
                </div>
        );
    }
}

export default Pricing;

