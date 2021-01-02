import React from 'react';

import { ReactComponent as Android } from '../../assets/android.svg';
import { ReactComponent as Java } from '../../assets/java.svg';
import { ReactComponent as Python } from '../../assets/python.svg';
import { ReactComponent as Php } from '../../assets/php.svg';
import { ReactComponent as Angular } from '../../assets/angular.svg';
import { ReactComponent as CS } from '../../assets/cyber.svg';
import { ReactComponent as Django} from '../../assets/django.svg';
import { ReactComponent as Net} from '../../assets/net.svg';

import './tech.styles.scss';

const Tech = () => (
    <div className = 'tech'>
        <h className = 'heading'>Technologies We Aspire For</h>
        <div className = 'images'>   
        <Android className = 'android'/>
        <Java className = 'java'/>
        <Python className = 'python'/>
        <Php className = 'php'/>
        <Angular className = 'angular'/>
        <Django className = 'django'/>
        <CS className = 'cs'/>
        <Net className = 'net'/>
        </div>
    </div>
);

export default Tech;