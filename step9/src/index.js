import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            repos: [],
            showList: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleChange(e) {
        this.setState({username: e.target.value});
    }

    handleClick() {
        const newRepos = [];

        this.getUserRepo(this.state.username)
            .then(data => data.forEach((obj) => {
                newRepos.push(obj.name);
            })).then(() => this.setState({repos: newRepos, showList: true})
        )};

    getUserRepo = async (username) => {
        const res = await fetch(`https://api.github.com/users/${username}/repos`);

        if (!res.ok) {
            throw new Error(`Could not fetch` +
            `, received ${res.status}`);
        }
    
        return await res.json();
    }

    render() {

        const { repos, showList } = this.state;

        let reposList = repos.map((name) => {
            return <div>
                <li key={name}>{name}</li>
            </div>
        });

        const list = showList ? reposList : null;

        return (
            <div className="app">
                <h1>Введите имя пользователя, чтобы получить список его репозиториев</h1>
                <input 
                    type="text" 
                    name="text"
                    id="inp"
                    placeholder="Введите имя пользователя"
                    onChange={this.handleChange}></input>
                <button
                    onClick={this.handleClick}
                    id="btn">Получить</button>

                <ul id="ulRepos">{list}</ul>
            </div>
        )
    }
}

ReactDom.render(<App/>, document.getElementById('root'));