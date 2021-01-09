import React, { Component } from "react";
import gotService from '../../service/gotService';
import Error from '../error/error';

export default class ReposList extends Component {

    state = {
        repos: [],
        hasError: false
    }

    componentDidMount() {
        this.updateRepos();
    }

    componentDidUpdate(prevState) {
        if (this.props.username !== prevState.username) {
            this.updateRepos();
        }
    }

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    updateRepos() {
        const {getResource} = new gotService();
        const { username } = this.props;

        if (!username) {
            return;
        }

        const newRepos = [];

        getResource(username)
            .then(data => data.forEach((obj) => {
                newRepos.push(obj.name);
            }))
            .then(() => this.setState({repos: newRepos}))
            .catch(alert('Такого пользователя не существует!'));
    }

    // 

    render() {
        const { repos, hasError } = this.state;

        if(hasError) {
            return <Error/>
        }

        const items = repos.map((name) => <li key={name}>{name}</li>)

        return <ul id="ulRepos">{items}</ul>
    }
}