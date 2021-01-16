import React, { FC, useState, useEffect } from 'react';
import gotService from '../../service/gotService';
import {UserData, Repos } from '../../models/data';
import Profile from '../profile/profile';

type propsType = {
    username: string
}

const UserPage: FC<propsType> = (props) => {

    const { getUser, getRepos} = new gotService();

    const [userData, setUserData] = useState<UserData>({avatar_url: '', html_url: ''}),
          [reposList, setReposList] = useState<Repos[]>([]);
    
    useEffect(() => {
        getUser(props.username)
            .then(data => {
                setUserData(data)
        });
        getRepos(props.username)
            .then(data => {
                setReposList(data)
    });
    }, []);

    const repos = reposList?.map(repo => ({
        name: repo.name,
        url: repo.html_url
    }))

    return (
        <Profile 
        username={props.username}
        repos={repos}
        avatar={userData?.avatar_url}
        html_url={userData?.html_url}></Profile>
    )
}

export default UserPage;