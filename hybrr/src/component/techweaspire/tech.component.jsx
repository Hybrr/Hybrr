import React from 'react';

import { ReactComponent as Android } from '../../assets/android.svg';
import { ReactComponent as Java } from '../../assets/java.svg';
import { ReactComponent as Python } from '../../assets/python.svg';
import { ReactComponent as Php } from '../../assets/php.svg';
import { ReactComponent as Angular } from '../../assets/angular.svg';
import { ReactComponent as CS } from '../../assets/cyber.svg';

import './tech.styles.scss';

const Tech = () => (
    <div className = 'tech'>
        <h>Technologies We Aspire For</h>
        <div className = 'images'>
        <Android/>
        <Java/>
        <Python/>
        <Php/>
        <Angular/>
        <CS/>
        </div>
    </div>
);

export default Tech;