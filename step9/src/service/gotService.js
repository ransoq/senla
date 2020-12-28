export default class GotService {
    constructor() {
        this._apiBase = "https://api.github.com/users";
    }

    getResource = async (username) => {
        const res = await fetch(`${this._apiBase}/${username}/repos`);
    
        if (!res.ok) {
            throw new Error(`Could not fetch` +
            `, received ${res.status}`);
        }
    
        return await res.json();
    }
}

