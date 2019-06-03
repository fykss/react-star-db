import React, { Component } from 'react';
import './itemList.scss';

export default class itemList extends Component {
    render() {
        return (
            <ul className='container list-group item-list'>
                <li className='list-group-item d-flex justify-content-between align-items-center'>
                    Cras justo odio
                </li>
                <li className='list-group-item d-flex justify-content-between align-items-center'>
                    Dapibus ac facilisis in
                </li>
                <li className='list-group-item d-flex justify-content-between align-items-center'>
                    Morbi leo risus
                </li>
            </ul>
        );
    }
}
