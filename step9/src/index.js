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
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e) {
        this.setState({username: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();

        const newRepos = [];

        this.getUserRepo(this.state.username)
            .then(data => data.forEach((obj) => {
                newRepos.push(obj.name);
            }));

        this.setState({repos: newRepos, showList: true});
    }

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

        let reposList = repos.map((name) => <li key={name}>{name}</li>);

        const list = showList ? reposList : null;

        return (
            <div className="app">
                <h1>Введите имя пользователя, чтобы получить список его репозиториев</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="text"
                        id="inp"
                        placeholder="Введите имя пользователя"
                        onChange={this.handleChange}></input>
                    <input
                        type="submit" 
                        id="btn"
                        value="Получить"></input>
                </form>
                <ul id="ulRepos">{list}</ul>
            </div>
        )
    }
}

ReactDom.render(<App/>, document.getElementById('root'));