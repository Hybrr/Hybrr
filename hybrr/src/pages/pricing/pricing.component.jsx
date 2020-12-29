import React from 'react';
import PRICING_DATA from '../../data-hybrr/pricing.data';

class Pricing extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            data: PRICING_DATA
        };
    }

    render(){
        return ( 
            <div className = 'title'>
            {this.state.data.map(data => (
                <h1 key = {data.id}>{data.type}{data.price}<div className = 'content'><p>{data.services}</p></div></h1>
            ))}
        </div>
        );
    }
}

export default Pricing;