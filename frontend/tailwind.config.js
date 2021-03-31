const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./dist/**/*.html', './dist/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        black: colors.black,
        white: colors.white,
        'rl-common': {
          light: '#2A2C2F',
          DEFAULT: '#989898',
          dark: '#121519',
        },
        'rl-uncommon': {
          light: '#243C47',
          DEFAULT: '#83D9FB',
          dark: '#101B23',
        },
        'rl-veryrare': {
          light: '#2A2044',
          DEFAULT: '#9976FA',
          dark: '#120E1E',
        },
        'rl-import': {
          light: '#451518',
          DEFAULT: '#EE3C3C',
          dark: '#1D0D10',
        },
        'rl-exotic': {
          light: '#424022',
          DEFAULT: '#EDD751',
          dark: '#1E1E15',
        },
        'rl-limited': {
          light: '#422215',
          DEFAULT: '#FF7E45',
          dark: '#1A0F0D',
        },
        'rl-premium': {
          light: '#244839',
          DEFAULT: '#78F0B0',
          dark: '#0E1A19',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
