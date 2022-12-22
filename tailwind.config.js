/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: "class",
    future: {
        hoverOnlyWhenSupported: true
    },
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontWeight: ['hover'],
            colors: {
                // main color palette https://coolors.co/ffffff-c3e5ff-80bae6-51ebf3-0ea5e9-147aff-1053ab-2d3a52-a6a8ab
                'prussianBlue': '#2d3a52',
                'uranianBlue': '#c3e5ff',
                'aero': '#80bae6',
                'blueCrayola': '#147AFF',
                'sapphire': '#1053ab',
                'carolinaBlue': '#0ea5e9',
                'electricBlue': '#51EBF3',

                // unique color palette
                'quickSilver': '#A6A6A6',
                'silver': '#c9c6c6',
            }
        },
    },
    plugins: [],
}
