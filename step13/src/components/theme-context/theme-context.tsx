import React from "react";

type theme = {
    background: string,
    color: string
}

interface Themes {
    light: theme,
    dark: theme
}

export const themes: Themes = {
    light: {
        background: '#fff',
        color: '#000'
    },
    dark: {
        background: '#000',
        color: '#fff'
    },
  };
  
export const ThemeContext: any = React.createContext({
theme: themes.dark
});