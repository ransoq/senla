import React, {useState, useCallback } from "react";
import gotService from '../service/gotService';
import ReposList from '../components/reposList/reposList';

const ReposPage = () => {
    const [username, setUsername] = useState('');
    const [repos, setRepos] = useState(null);
    
    function handleChange(e) {
        setUsername(e.target.value);
    }

    const handleClick = useCallback(() => {
        const {getResource} = new gotService();

        const newRepos = [];

        getResource(username)
            .then(data => data.forEach((obj) => {
                newRepos.push(obj.name);
            }))
            .then(() => setRepos(newRepos));
    }, [username])
    
    const items = repos ? <ReposList repos={repos}/> : null;

    return (
        <>
            <h2>Введите имя пользователя, чтобы получить список его репозиториев</h2>
            <input 
                type="text" 
                name="text"
                id="inp"
                placeholder="Введите имя пользователя"
                onChange={handleChange}></input>
            <button
                onClick={handleClick}
                id="btn">Получить</button>

            {items}
        </>
    )
}

export default ReposPage;