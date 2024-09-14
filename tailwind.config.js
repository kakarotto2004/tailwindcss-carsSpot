/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./*.{html,js}'],
    theme: {
        extend: {
            colors: {
                whiteBg: '#F7F7F7',
                blueDark: '#0147FF',
                grayDark: '#282828',
                grayLight: '#F1F1F1',
            },

            fontFamily: {
                robotoFlex: ['Roboto Flex'],
                bebas: ['Bebas Neue'],
                robotoCondensed: ['Roboto Condensed'],
            },

            fontSize: {
                px21: ['22px'],
                px26: ['26px'],
                px40: ['40px'],
            },

            spacing: {
                p120px: ['120px'],
                p88px: ['88px'],
            },
        },

        screens: {
            sm: '641px',
            md: '769px',
            lg: '1025px',
            xl: '1281px',
            '2xl': '1536px',
        },
    },
    plugins: [],
};
