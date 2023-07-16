import { useContext } from 'react';
import { ThemeContext } from '../ThemeProviderContext';

import { SwitcherStyled } from './themeSwitcher.styled';
import { FaBeer } from "react-icons/fa";

const ThemeSwitcher = (props) => {
    const { isLight, toggleTheme } = useContext(ThemeContext);
    const pawColor = isLight ? "#54ADFF" : "#FFC107";

    return (
        <SwitcherStyled onClick={toggleTheme} pawColor={pawColor} {...props}>
            <span>{isLight ? "Dark beer" : "Light beer"}</span>
            <FaBeer />
        </SwitcherStyled>
    )
};
ThemeSwitcher.defaultProps = {
    isLight: false,
};


export default ThemeSwitcher;