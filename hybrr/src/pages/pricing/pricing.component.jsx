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
                    {this.state.data.map(data => (
                    <h1 key = {data.id}>{data.type}<br></br>{data.price}<div className = 'content1' data-aos = "fade-left"><p>{data.service}<br></br>{data.period}</p></div></h1>
                ))}
                </div>
        );
    }
}

export default Pricing;

