import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../randomPlanet';
import ItemList from '../itemList';
import PersonDetails from '../personDetails'

import './app.scss';

export default class app extends Component {

    state = {
        selectedPerson: null
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    };

    render() {
        return (
            <div>
                <Header />
                <RandomPlanet />
                <ItemList onItemSelected={this.onPersonSelected}/>
                <PersonDetails personId={this.state.selectedPerson}/>
            </div>
        );
    }
}
