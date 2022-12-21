import React, {useEffect, useState} from 'react';
import {RiMoonClearLine} from 'react-icons/ri'
import {FiSun} from 'react-icons/fi'
import {useTheme} from "next-themes";

function LightDarkModeSwitch() {
    const {theme, setTheme} = useTheme()
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])

    return (
        <button className="rounded-lg p-1 hover:opacity-80 h-fit w-fit">
            {!mounted ?
                (<div className="w-6 h-6"/>) :
                (<div>{theme === 'light' ? (
                    <FiSun onClick={() => setTheme("dark")} className="w-6 h-6 text-yellow-200"/>
                ) : (
                    <RiMoonClearLine onClick={() => setTheme("light")} className="w-6 h-6 text-gray-200"/>
                )}</div>)}

        </button>
    );
}

export default LightDarkModeSwitch;
