import React, { useState } from 'react';
import {RiMoonClearFill, RiSunFill} from 'react-icons/ri'

function LightDarkModeSwitch() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <button className="border rounded-lg p-1 hover:opacity-80 h-fit w-fit" onClick={toggleTheme}>
            {theme === 'light' ? (
                <RiSunFill className="w-6 h-6 text-yellow-300"/>
            ) : (
                <RiMoonClearFill className="w-6 h-6 text-gray-100"/>
            )}
        </button>
    );
}

export default LightDarkModeSwitch;
