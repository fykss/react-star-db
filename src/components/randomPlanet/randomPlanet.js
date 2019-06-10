import React, { Component } from 'react';
import './randomPlanet.scss';

import Spinner from '../spinner/spinner';
import ErrorIndicator from '../errorIndicator/errorIndicator';

import SwapiService from '../../services/swapi-service';

export default class randomPlanet extends Component {
    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false
    };

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 3500);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onPlanetLoaded = planet => {
        this.setState({
            planet,
            loading: false
        });
    };

    onError = err => {
        this.setState({
            error: true,
            loading: false
        });
    };

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 17) + 3;
        this.swapiService
            .getPlanets(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    };

    render() {
        const { planet, loading, error } = this.state;

        const hasData = !(loading || error);

        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? <PlanetView planet={planet} /> : null;

        return (
            <div className='container my-4'>
                <div className='random-block'>
                    {errorMessage}
                    {spinner}
                    {content}
                </div>
            </div>
        );
    }
}

const PlanetView = ({ planet }) => {
    const { id, name, population, rotationPeriod, diameter } = planet;

    return (
        <React.Fragment>
            <img
                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                alt='planet'
            />
            <div>
                <h3>{name}</h3>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <span>Population: </span>
                        <span>{population}</span>
                    </li>
                    <li className='list-group-item'>
                        <span>Rotation Period: </span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className='list-group-item'>
                        <span>Diametr: </span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
};
