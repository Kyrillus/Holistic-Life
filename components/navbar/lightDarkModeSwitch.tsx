import React, {useEffect, useState} from 'react';
import {useTheme} from "next-themes";
import {DarkModeSwitch} from "react-toggle-dark-mode";

function LightDarkModeSwitch({size, sunColor, moonColor}: { size: number, sunColor: string, moonColor: string }) {
    const {theme, setTheme} = useTheme()
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])

    return (
        <>
            {!mounted ?
                (<div className="w-5 h-5"/>) :
                (<DarkModeSwitch size={size} sunColor={sunColor} moonColor={moonColor} checked={theme !== 'light'}
                                 onChange={() => {
                                     setTheme(theme === 'light' ? 'dark' : 'light')
                                 }}>
                </DarkModeSwitch>)}

            {/*<button className="flex items-center justify-center rounded-lg p-1 hover:opacity-80 h-fit w-fit">*/}
            {/*    {!mounted ?*/}
            {/*        (<div className="w-5 h-5"/>) :*/}
            {/*        (<div className="flex justify-center items-center w-5 h-5">{theme === 'light' ? (*/}
            {/*            <TbSun onClick={() => setTheme("dark")} className={`w-5 h-5 text-electricBlue`}/>*/}
            {/*        ) : (*/}
            {/*            <RiMoonClearLine onClick={() => setTheme("light")} className={`w-5 h-5 text-quickSilver`}/>*/}
            {/*        )}</div>)}*/}
            {/*</button>*/}
        </>
    );
}

export default LightDarkModeSwitch;
