import {UserData, Repos} from '../models/data';

const _apiBase = "https://api.github.com/users";

export default class GotService {

    getUser = async (username: string): Promise<UserData> => {
        const response = await fetch(`${_apiBase}/${username}`);
        const user = (response.ok) ? response.json() : null;

        return user;
    }

    getRepos = async (username: string): Promise<Repos[]> => {
        const response = await fetch(`${_apiBase}/${username}/repos`);
        const repos = (response.ok) ? response.json() : null;

        return repos;
    }
}