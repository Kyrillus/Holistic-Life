import React from 'react';
import {RiMoonClearLine} from 'react-icons/ri'
import {FiSun} from 'react-icons/fi'
import useLightDarkMode from "../../hooks/useDarkSide";

function LightDarkModeSwitch() {
    const [theme, toggleTheme] = useLightDarkMode();

    return (
        <button className="rounded-lg p-1 hover:opacity-80 h-fit w-fit" onClick={toggleTheme}>
            {theme === 'light' ? (
                <FiSun className="w-6 h-6 text-yellow-200"/>
            ) : (
                <RiMoonClearLine className="w-6 h-6 text-gray-200"/>
            )}
        </button>
    );
}

export default LightDarkModeSwitch;
