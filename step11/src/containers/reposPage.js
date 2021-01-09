import React, {Component} from "react";
import ReposList from '../components/reposList/reposList';

export default class ReposPage extends Component {

    constructor(props) {
        super(props);
        this.onUsernameSelected = this.onUsernameSelected.bind(this);
    }

    state = {
        username: null
    }

    onUsernameSelected() {
        const input = document.querySelector("#inp");
        this.setState({username: input.value});
    }

    render() {
        const { username } = this.state;
        
        return (
            <>
                <h2>Введите имя пользователя, чтобы получить список его репозиториев</h2>
                <input 
                    type="text" 
                    name="text"
                    id="inp"
                    placeholder="Введите имя пользователя"></input>
                <button
                    onClick={this.onUsernameSelected}
                    id="btn">Получить</button>

               <ReposList username={username}></ReposList>
            </>
        )
    }
}