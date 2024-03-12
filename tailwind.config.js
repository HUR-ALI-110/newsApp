/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'nav-border': '#EBEAEA',
                'light-white': '#FAFAFB',
                'light-white-100': '#F1F4F5',
                'light-white-200': '#d7d7d7',
                'light-white-300': '#F3F3F4',
                'light-white-400': '#E2E5F1',
                'light-white-500': '#E4E4E4',
                gray: '#4D4A4A',
                'gray-100': '#3d3d4e',
                'black-100': '#252525',
                'primary-purple': '#9747FF',
                'gray-50': '#D9D9D9',
                "black-100": "#2B2C35",
                "primary-blue": {
                    DEFAULT: "#2B59FF",
                    100: "#F5F8FF",
                },
                "secondary-orange": "#f79761",
                "light-white": {
                    DEFAULT: "rgba(59,60,152,0.03)",
                    100: "rgba(59,60,152,0.02)",
                },
                grey: "#747A88",
            },
            boxShadow: {
                menu: '0px 159px 95px rgba(13,12,34,0.01), 0px 71px 71px rgba(13,12,34,0.02), 0px 18px 39px rgba(13,12,34,0.02), 0px 0px 0px rgba(13,12,34,0.02)',
            },
            screens: {
                'xs': '400px',
            },
            maxWidth: {
                '10xl': '1680px'
            }
        },
    },
    plugins: [],
};