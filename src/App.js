import { Component } from 'react';
import './App.css';

// Components
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchText: ''
    }

  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => this.setState({ monsters: data }));
  }

  // Methods /////////////////
  onSearchTextChange = text => {
    this.setState({ searchText: text })
  }



  render(){
    const { monsters, searchText } = this.state;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchText.toLowerCase());
    })

    return (
      <div className="App">
        <div className='container'>
          <h1 className='text-center'>Monster RoloDex</h1>
          <SearchBox onSearchTextChange={this.onSearchTextChange}  />
          <CardList monsters={filteredMonsters}/>
        </div>
      </div>
    );

    
  }
}

export default App;
