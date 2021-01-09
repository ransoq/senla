import {useEffect, useState} from "react";

const UseReposInfo = (repos) => {

    const [ reposList, setReposList ] = useState([]);

    useEffect(() => {
        setReposList(repos);
    }, [repos]);

    return reposList.map((name) => {
        return <li key={name}>{name}</li>;
    });
}

export default UseReposInfo;