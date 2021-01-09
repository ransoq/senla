import React, {Component} from "react";
import gotService from '../service/gotService';
import ReposList from '../components/reposList/reposList';

export default class ReposPage extends Component {
    gotService = new gotService();

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            repos: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }


    handleChange(e) {
        this.setState({username: e.target.value});
    }

    handleClick() {
        const newRepos = [];

        this.gotService.getResource(this.state.username)
            .then(data => data.forEach((obj) => {
                newRepos.push(obj.name);
            })).then(() => this.setState({repos: newRepos}))
    };

    render() {
        const { repos } = this.state;

        let reposList = repos.map((name) => {
            return React.createElement("li", { key: name}, name);
        });

        return (
            <>
                <h2>Введите имя пользователя, чтобы получить список его репозиториев</h2>
                <input 
                    type="text" 
                    name="text"
                    id="inp"
                    placeholder="Введите имя пользователя"
                    onChange={this.handleChange}></input>
                <button
                    onClick={this.handleClick}
                    id="btn">Получить</button>

                <ReposList>{reposList}</ReposList>
            </>
        )
    }
}