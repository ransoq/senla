const btn = document.querySelector("#btn");

btn.addEventListener('click', function (e) {
    const value = document.querySelector("#inp").value;
    e.preventDefault();
    getResource(value);
});

const deletePrevList = () => {
    const elem = document.querySelectorAll('#ulRepos > li');
    elem.forEach(elem => elem.remove());
};

const addItems = (data) => {
    data.forEach(function(obj) {
        const newLi = document.createElement("li"),
              cacheUl = document.querySelector("#ulRepos"),
              newContent = document.createTextNode(obj.name);

        newLi.appendChild(newContent);
        cacheUl.appendChild(newLi);
    });
};

const getData = (name) => {
    const url = `https://api.github.com/users/${name}/repos`;

    fetch(url)
    .then(data => data.json())
    .then(obj => {
        deletePrevList();
        addItems(obj);
    })
    .catch(err => console.error(err));
};

const getResource = async (name) => {
    const url = `https://api.github.com/users/${name}/repos`;
    const res = await fetch(url);
    
    deletePrevList();

    if (res.ok) {
        let repos = await res.json();
        addItems(repos);
    } else {
        alert("Ошибка HTTP: " + res.status);
    }
};