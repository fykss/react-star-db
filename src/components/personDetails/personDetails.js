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
                        <h3>Planet name</h3>
                        <hr className='mt-1' />
                        <p>Population 12343212</p>
                        <p>Rotation period 43</p>
                        <p>Diametr 100</p>
                    </div>
                </div>
            </div>
        );
    }
}
