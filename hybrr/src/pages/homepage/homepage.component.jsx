import React from 'react';
import HOMEPAGE_DATA from '../../data-hybrr/data-hybrr.data.js';

import './homepage.styles.scss';

class HomePage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            data: HOMEPAGE_DATA
        };
    }

    render(){
        return ( 
            <div className = 'title' data-aos = "fade-right">
                {this.state.data.map(data => (
                <h1 key = {data.id}>{data.title}<div className = 'content' data-aos ="flip-up"><p>{data.content}</p></div></h1>
            ))}
    
            </div>
            );
        }
}

export default HomePage;

