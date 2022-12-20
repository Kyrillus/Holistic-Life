import { useState, useEffect } from 'react';

function useLightDarkMode() {
    const [theme, setTheme] = useState('light');

    function toggleTheme() {
        if (theme === 'light') {
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            setTheme('light');
            localStorage.setItem('theme', 'light');
        }
    }

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, []);

    return [theme, toggleTheme] as const;
}

export default useLightDarkMode;