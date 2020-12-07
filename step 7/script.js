let values = [];

const getData = (name) => {
    const url = `https://api.github.com/users/${name}/repos`;
    const res = fetch(url);
    // .then(JSON.parse('"name"'))
    // .then(data => console.log(data));
};

const getResource = async (name) => {
    const listRepos = document.querySelector('.repos');
    const url = `https://api.github.com/users/${name}/repos`;
    const res = await fetch(url);
    
    let repos = await res.json();

    repos.forEach(function(obj) {
        const newLi = document.createElement("li"),
              cacheUl = document.querySelector("#ulRepos"),
              newContent = document.createTextNode(obj.name);

        newLi.appendChild(newContent);
        cacheUl.appendChild(newLi);
    });
};

// getData('ransoq');
getResource('ransoq');