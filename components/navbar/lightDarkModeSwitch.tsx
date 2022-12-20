import React, {useEffect, useState} from 'react';
import {RiMoonClearLine, FiSun} from 'react-icons/all'
import useDarkSide from "../../hooks/useDarkSide";

function LightDarkModeSwitch() {
    const [theme, setTheme] = useDarkSide();

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <button className="rounded-lg p-1 hover:opacity-80 h-fit w-fit" onClick={toggleTheme}>
            {theme === 'light' ? (
                <FiSun className="w-6 h-6 text-aero"/>
            ) : (
                <RiMoonClearLine className="w-6 h-6 text-blueCrayola"/>
            )}
        </button>
    );
}

export default LightDarkModeSwitch;
