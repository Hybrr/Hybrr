import React from 'react';
import HOMEPAGE_DATA from '../../homepage.data.js';

import './homepage.styles.css';

class HomePage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            data : HOMEPAGE_DATA
        };
    }

    render(){
        return <div className = 'home-page'>
            <div className = 'title'>Annual maintenance charges</div>
            <div className = 'title'>Software development</div>
            <div className = 'title'>Digital marketing</div>
            <div className = 'title'>Application development </div>
            <div className = 'title'>Web development</div>
            <div className = 'title'>Erp</div>
            <div className = 'title'>Customize software</div>
            <div className = 'title'>Cyber security</div>
            <div className = 'title'>College projects</div>
             </div>
            
    }
};

export default HomePage;

