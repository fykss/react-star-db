import React, { Component } from 'react';
import './spinner.scss';

export default class spinner extends Component {
    render() {
        return (
            <div className='container d-flex justify-content-center'>
                <div className='lds-css ng-scope'>
                    <div className='lds-double-ring'>
                        <div />
                        <div />
                    </div>
                </div>
            </div>
        );
    }
}
