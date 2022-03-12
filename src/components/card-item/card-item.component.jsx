import React, { Component } from 'react';
import './card-item.styles.css';

class CardItem extends Component {
    constructor(){
        super();
    }

    render(){
        const { id, email, name } = this.props;
        return(
            <div className='card-item'>
                <img src={`https://robohash.org/${id}?set=set2`} />
                <h1>{ name }</h1>
                <p>{ email }</p>
            </div>
        )
    }
}

export default CardItem;