import React, { Component } from 'react';
import './card-list.styles.css';

// Components
import CardItem from '../card-item/card-item.component';



class CardList extends Component {
    constructor() {
        super();
    }

    render(){
        const { monsters } = this.props;
        return(
            <div className='card-list'>
                {monsters.map(monster => <CardItem key={monster.id} {...monster} />)}
            </div>
        )
    }

}

export default CardList;