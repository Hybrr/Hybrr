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
                MORE ABOUT HYBRR
            {this.state.data.map(data => (
                <h1 key = {data.id}><div className = 'more-content'><p>{data.content}</p></div></h1>
            ))}
        </div>
        );
    }
}

export default MoreHybrr;