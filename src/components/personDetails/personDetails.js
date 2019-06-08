import React, { Component } from 'react';
import './personDetails.scss';

export default class personDetails extends Component {
    render() {
        return (
            <div className='container my-4'>
                <div className='person-details d-flex'>
                    <img
                        src='https://starwars-visualguide.com/assets/img/characters/3.jpg'
                        alt='planet'
                    />
                    <div>
                        <h3>R2-D2</h3>
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>
                                <span>Gender: </span>
                                <span>male</span>
                            </li>
                            <li className='list-group-item'>
                                <span>Birth year: </span>
                                <span>43</span>
                            </li>
                            <li className='list-group-item'>
                                <span>Eye color: </span>
                                <span>red</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
