import React from 'react';
import MOREHYBRR_DATA from '../../data-hybrr/morehybrr.data';

import './morehybrr.styles.scss';

class MoreHybrr extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            data: MOREHYBRR_DATA
        };
    }

    render(){
        return ( 
            <div className = 'morehybrr'>
                <h className = 'head1'>MORE ABOUT HYBRR</h>
            {this.state.data.map(data => (
                <h1 key = {data.id}><div className = 'more-content' data-aos = "zoom-in-right"><p>{data.content}</p></div></h1>
            ))}
        </div>
        );
    }
}

export default MoreHybrr;