import React, { useContext, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage, CartPage } from "../pages"
import Header from "../header/header";
import { ThemeContext, themes } from '../theme-context/theme-context';

import "./app.css";

const App = () => {

    const [ theme, setTheme ] = useState(themes.light);

    const toggleTheme = () => {
        setTheme(theme === themes.dark
            ? themes.light
            : themes.dark,
        )
    }

    return (
        <ThemeContext.Provider value={{ theme }}>
            <main className="container" style={theme}>
                <Header numItems={5} total={0} toggleTheme={toggleTheme}/>
                <Switch>
                    <Route 
                        path="/"
                        component={HomePage}
                        exact/>
                    <Route
                        path="/cart"
                        component={CartPage}/>
                </Switch>
            </main>
        </ThemeContext.Provider>

    )
}

export default App;