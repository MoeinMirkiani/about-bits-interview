/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['SF Pro', 'sans-serif']
            },
            fontSize: {
                'heading-large': ['30px', {
                    lineHeight: '40px',
                    fontWeight: 400,
                }],
                'heading-medium': ['26px', {
                    lineHeight: '36px',
                    fontWeight: 400,
                }],
                'title-medium': ['16px', {
                    lineHeight: '24px',
                    letterSpacing: '0.1px',
                    fontWeight: 500,
                }],
                'label-large': ['14px', {
                    lineHeight: '20px',
                    letterSpacing: '0.1px',
                    fontWeight: 500,
                }],
                'label-medium': ['12px', {
                    lineHeight: '16px',
                    letterSpacing: '0.5px',
                    fontWeight: 500,
                }],
                'label-small': ['10px', {
                    lineHeight: '16px',
                    letterSpacing: '0.5px',
                    fontWeight: 500,
                }],
                'body-large': ['16px', {
                    lineHeight: '24px',
                    fontWeight: 400,
                }],
                'body-medium': ['14px', {
                    lineHeight: '20px',
                    fontWeight: 400,
                }],
            },
            colors: {
                primary: {
                    50: '#E9EFFD',
                    100: '#D3DFFA',
                    200: '#A6BFF5',
                    300: '#7A9FEE',
                    400: '#4D7FE7',
                    500: '#4C6EE8',
                    '500-0.1': '#4C6EE81A',
                    600: '#3C59B6',
                    700: '#2C4495',
                    800: '#1D3065',
                    900: '#0E1A40',
                    950: '#0A132F'
                },
                neutral: {
                    50: '#F6F6F6',
                    100: '#ECECEC',
                    200: '#D8D8D8',
                    300: '#C4C4C4',
                    400: '#AFAFAF',
                    500: '#737373',
                    '500-0.1': '#7373731A',
                    600: '#5A5A5A',
                    700: '#444444',
                    800: '#2E2E2E',
                    900: '#1A1A1A',
                    950: '#121212',
                }
            },
        },
    },
    plugins: []
}
