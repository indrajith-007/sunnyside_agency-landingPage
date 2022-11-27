/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'soft-red': 'hsl(7, 99%, 70%)',
                'primary-yellow': 'hsl(51, 100%, 49%)',
                'dark-desatured-cyan': 'hsl(167, 40%, 24%)',
                'dark-blue': 'hsl(198, 62%, 26%)',
                'dark-moderate-cyan': 'hsl(168, 34%, 41%)',
                'primary-blue': '	hsl(200, 100%, 62%)',

                'very-dark-desatured-blue': 'hsl(212, 27%, 19%)',
                'very-dark-grayish-blue': 'hsl(213, 9%, 39%)',
                'dark-grayish-blue': 'hsl(232, 10%, 55%)',
                'grayish-blue': 'hsl(210, 4%, 67%)'
            },
            backgroundImage: {
                hero: 'url(/src/assets/desktop/image-header.jpg)',
                heroMb: 'url(/src/assets/mobile/image-header.jpg)'
            }
        },
        fontFamily: {
            barlow: ['Barlow', 'sans-serif'],
            fraunces: ['Fraunces', 'sans-serif']
        }
    },
    plugins: []
};
