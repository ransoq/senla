import React from 'react';
import MainPage from '../../containers/mainPage';
import UserPage from '../userPage/userPage';
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
                        <Route path='/:username' render={
                                ({match}) => {
                                    const {username} = match.params;

                                return <UserPage username={username} />
                            }
                            }/>
                    </Switch>
                </div>
            </Router>
        )
}

export default App;