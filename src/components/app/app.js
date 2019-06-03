import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../randomPlanet';
import ItemList from '../itemList';
import PersonDetails from '../personDetails'

import './app.scss';

export default class app extends Component {
    render() {
        return (
            <div>
                <Header />
                <RandomPlanet />
                <ItemList />
                <PersonDetails />
            </div>
        );
    }
}
