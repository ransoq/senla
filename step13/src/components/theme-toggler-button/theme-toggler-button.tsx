import React from 'react';
import { ThemeContext } from '../theme-context/theme-context';

type theme = {
    background: string,
    color: string
}

function ThemeTogglerButton({toggleTheme}: any) {

  return (
    <ThemeContext.Consumer>
      {({theme} : {theme: theme}) => (
        <button
          onClick={toggleTheme}
          className="btn btn-info"
          style={{backgroundColor: theme.background, color: theme.color}}>
          Toggle Theme
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemeTogglerButton;