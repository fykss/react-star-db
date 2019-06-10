import React, {Component} from 'react';
import './header.scss';

export default class header extends Component {
    render() {
        return (
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <div className='container'>
                    <h3>
                        <a className='navbar-brand' href='/'>
                            StarDB
                        </a>
                    </h3>

                    <div
                        className='collapse navbar-collapse'
                        id='navbarColor03'
                    >
                        <ul className='navbar-nav mr-auto'>
                            <li className='nav-item'>
                                <a className='nav-link' href='/'>
                                    People
                                    <span className='sr-only'>(current)</span>
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='/'>
                                    Planets
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='/'>
                                    Starships
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
