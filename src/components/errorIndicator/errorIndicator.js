import React, { Component } from 'react';

import './errorIndicator.scss';
import icon from './death-star.png';

export default class errorIndicator extends Component {
    render() {
        return (
            <div className='error-indicator'>
                <img src={icon} alt='error icon' />
                <span className='boom'>Boom</span>
                <span>something has gone terribly wrong</span>
                <span>(but we already sent droids to fix it)</span>
            </div>
        );
    }
}
