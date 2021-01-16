import { FC } from 'react';

type propsType = { 
    username: string,
    html_url: string,
    avatar: string,
    repos?: {
        name: string,
        url: string
    }[]
};

const Profile: FC<propsType> = (props) => {

    const repos = props.repos ? (
        props.repos.map(repo => <li key={repo.name}>{repo.name}</li>)
    ) : <p>Список репозиториев пуст</p>

    return (
        <div className={"user"}>      
            <img className={"avatar"} src={props.avatar} alt={props.username}></img>
            <a href={props.html_url} className={"git_url"}>
                <h2>{props.username}</h2>
            </a>
            <ul id={"ulRepos"}>
                {repos}
            </ul>
        </div>
    )
}

export default Profile;