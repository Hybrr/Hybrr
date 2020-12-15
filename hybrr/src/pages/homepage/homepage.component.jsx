import React from 'react';
import HOMEPAGE_DATA from '../../data-hybrr/data-hybrr.data.js';

import './homepage.styles.css';

class HomePage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            data: HOMEPAGE_DATA
        };
    }

    render(){
        return ( 
            <div className = 'title'>
            {this.state.data.map(data => (
                <h1 key = {data.id}>{data.title}<br></br><div className = 'content'>{data.content}</div></h1>
            ))}
        </div>
        );
    }
}

export default HomePage;

