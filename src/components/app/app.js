import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../randomPlanet';
import ItemList from '../itemList';
import PersonDetails from '../personDetails'

import './app.scss';
import SwapiService from "../../services/swapi-service";

export default class app extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: 4
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    };

    render() {
        return (
            <div>
                <Header/>
                <RandomPlanet/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <ItemList
                                onItemSelected={this.onPersonSelected}
                                getData={this.swapiService.getAllPeople()}
                            />
                        </div>
                        <div className="col-md-3">
                            <PersonDetails
                                personId={this.state.selectedPerson}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
