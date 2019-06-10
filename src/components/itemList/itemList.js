import React, {Component} from 'react';
import './itemList.scss';

import Spinner from '../spinner'

export default class itemList extends Component {

    state = {
        itemList: null
    };

    componentDidMount() {
        const {getData} = this.props;

        getData.then(peopleList => {
                this.setState({
                    itemList: peopleList
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

        const {itemList} = this.state;

        if (!itemList) {
            return <Spinner />
        }

        const items = this.renderItems(itemList);

        return (
            <ul className='list-group'>
                {items}
            </ul>
        );
    }
}
