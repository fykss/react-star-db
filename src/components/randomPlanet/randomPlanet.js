import React, { Component } from 'react';
import './randomPlanet.scss';

export default class randomPlanet extends Component {
    render() {
        return (
            <div className='container my-4'>
                <div className='random-block d-flex'>
                    <img
                        src='https://vignette.wikia.nocookie.net/starwars/images/b/b9/Hos.png/revision/latest?cb=20171113015859'
                        alt='planet'
                    />
                    <div>
                        <h3>Planet name</h3>
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>
                                <span>Population: </span>
                                <span>12343212</span>
                            </li>
                            <li className='list-group-item'>
                                <span>Rotation Period: </span>
                                <span>12343212</span>
                            </li>
                            <li className='list-group-item'>
                                <span>Diametr: </span>
                                <span>100</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
