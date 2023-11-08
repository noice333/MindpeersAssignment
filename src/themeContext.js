import React from 'react';

export const themes = {
    "light": {
        theme: 'light',
        background: 'white',
        text: 'black',
        cardBackground: '#E7E9EB',
        palette: {
            primary: '#d2d3d4',
            secondary: '#737DFE'
        }
    },
    "dark": {
        theme: 'dark',
        background: '#212121',
        text: 'white',
        cardBackground: '#393939',
        palette: {
            primary: '#454545',
            secondary: '#737DFE'
        }
    }
}
export const ThemeContext = React.createContext(
    themes.dark
);
