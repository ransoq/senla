import React from 'react';
import ReactDom from 'react-dom';

import './app.css';

const App = () => {
    return (
        <div className="app">
            <h1>Введите имя пользователя, чтобы получить список его репозиториев</h1>
            <form>
                <input 
                    type="text" 
                    name="text"
                    id="inp"
                    placeholder="Введите имя пользователя"></input>
                <button id="btn">Получить GIT</button>
            </form>
        </div>
    )
}

ReactDom.render(<App/>, document.getElementById('root'));