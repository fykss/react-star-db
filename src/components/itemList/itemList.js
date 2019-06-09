import React, {Component} from 'react';
import './itemList.scss';

import Spinner from '../spinner'
import SwapiService from "../../services/swapi-service";

export default class itemList extends Component {
    swapiService = new SwapiService();

    state = {
        peopleList: null
    };

    // error Todo
    componentDidMount() {
        this.swapiService
            .getAllPeople()
            .then(peopleList => {
                this.setState({
                    peopleList
                });
            });

    }

    renderItems(arr) {
        return arr.map(({id, name}) => {
            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                    {name}
                </li>
            );
        });
    }

    render() {

        const {peopleList} = this.state;
        const items = this.renderItems(peopleList);

        if (!peopleList) {
            return <Spinner />
        }

        return (
            <ul className='container list-group item-list'>
                {items}
            </ul>
        );
    }
}
