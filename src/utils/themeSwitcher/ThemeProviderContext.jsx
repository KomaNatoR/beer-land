import React, { useState, useEffect } from 'react';
const ThemeContext = React.createContext();

const locatData = () => {
    const savedTheme = localStorage.getItem('colorTheme');
    
    return savedTheme !== "false" ? true : false;
};

const ThemeProviderContext = ({ children }) => {
    const [isLight, setIsLight] = useState(locatData);

    useEffect(() => {
        localStorage.setItem('colorTheme', isLight);
    }, [isLight]);
    const toggleTheme = () =>setIsLight(isLight => !isLight);
    
    return (
        <ThemeContext.Provider value={{ isLight, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
};

export {ThemeContext, ThemeProviderContext};