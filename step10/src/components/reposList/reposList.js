import React from "react";
import UseReposInfo from '../useReposInfo/useReposInfo';

const ReposList = ({repos}) => {

    const items = UseReposInfo(repos);

    return <ul id="ulRepos">{items}</ul>
}

export default ReposList;