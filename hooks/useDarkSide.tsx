import { useState, useEffect } from 'react';

function useTheme(): [string, (theme: string) => void] {
    const [theme, setTheme] = useState<string>(
        localStorage.getItem('theme') || 'light'
    );

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    return [theme, setTheme];
}

export default useTheme;
