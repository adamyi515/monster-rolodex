import React, { Component } from 'react';
import './search-box.styles.css';

class SearchBox extends Component {

    constructor() {
        super();
    }

    handleChange = ev => {
        this.props.onSearchTextChange(ev.target.value);
    }

    render(){
        return(
            <div className='search-box'>
                <input className='search-box__input' type='text' name='searchText' placeholder='Search here...' onChange={this.handleChange} />
            </div>
        )
    }
}

export default SearchBox;