import React from 'react';
import ABOUTUS_DATA  from '../../data-hybrr/aboutus.data';

import './aboutus.styles.scss';

class AboutUs extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            data: ABOUTUS_DATA
        };
    }

    render(){
        return(
            <div className = 'aboutus'>
                <h1 className = 'head'>ABOUT US</h1>
                {this.state.data.map(data=> (
                    <p key = {data.id}><div className = 'data' data-aos = "fade-right">{data.content}</div></p>
                ))}
            </div>
        );
    }
}

export default AboutUs;
