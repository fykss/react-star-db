import React, {Component} from 'react';
import './personDetails.scss';
import SwapiService from "../../services/swapi-service";
// import Spinner from '../spinner/spinner';

export default class personDetails extends Component {

    swapiService = new SwapiService();

    state = {
        person: null,
        // loading: true
    };

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.personId !== prevProps.personID) {
            this.updatePerson();
        }
    }

    updatePerson() {
        const {personId} = this.props;
        if (!personId) {
            return;
        }

        this.swapiService
            .getPerson(personId)
            .then((person) => {
                this.setState({
                    person
                })
            })
    }

    render() {

        if (!this.state.person) {
            return <span>Select a person form a list</span>
        }

        const {person} = this.state;

        // const spinner = loading ? <Spinner/> : null;
        const content = <PersonDetailsView person={person}/>;

        return (
            <div className='person-details my-3 my-md-0'>
                {/*{spinner}*/}
                {content}
            </div>
        );
    }
}

const PersonDetailsView = ({person}) => {
    const {id, name, gender, birth_year, eye_color} = person;

    return (
        <React.Fragment>
            <div className='d-flex flex-column'>
                <img
                    src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                    alt='planet'
                />
                <div>
                    < h3> {name}
                    </h3>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            <span>Gender: </span>
                            <span>{gender}</span>
                        </li>
                        <li className='list-group-item'>
                            <span>Birth year: </span>
                            <span>{birth_year}</span>
                        </li>
                        <li className='list-group-item'>
                            <span>Eye color: </span>
                            <span>{eye_color}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
};
