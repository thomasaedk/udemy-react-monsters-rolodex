import React from 'react';
import './App.css';
import {CardList} from "./components/card-list/card-list";
import {SearchBox} from "./components/search-box/search-box";

class App extends React.Component {

    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: ''
        };
    }

    render() {
        const {monsters, searchField} = this.state;
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );
        return (
            <div className="App">
                <h1>Monsters Rolodex</h1>
                <SearchBox placeholder="search monster" handleChange={this.handleChange}/>
                <CardList monsters={filteredMonsters}/>
            </div>
        )
    }

    handleChange = (e) => {
        this.setState({searchField: e.target.value});
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({monsters: users}));
    }
}

export default App;
