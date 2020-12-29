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
                ABOUT US
                {this.state.data.map(data=> (
                    <p key = {data.id}><div className = 'data'>{data.content}</div></p>
                ))}
            </div>
        );
    }
}

export default AboutUs;
