import React from 'react';
import ReposPage from '../../containers/reposPage';
import MainPage from '../../containers/mainPage';
import CatPage from '../../containers/catPage';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

import '../../styles/app.css';


const App = () => {

        return (
            <Router>
                <div className="app">
                    <Switch>
                        <Route path='/' exact component={MainPage}/>
                        <Route path='/cat' exact component={CatPage}/>
                        <Route path='/repos' extends component={ReposPage}/>
                    </Switch>
                </div>
            </Router>
        )
}

export default App;