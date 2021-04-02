const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./dist/**/*.html', './dist/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    filter: {
      none: 'none',
      blur: 'blur(1px)',
    },
    fontFamily: {
      sans: 'Roboto, Arial, Helvetica, sans-serif',
      rl: 'Bourgeois-Book',
    },
    textShadow: (theme) => {
      const shadows = Object.entries(theme('colors').rarity).reduce(
        (result, [rarity, color]) => {
          result[
            rarity
          ] = `0 0 8px ${color.DEFAULT}, 0 0 12px ${color.DEFAULT}`;
          return result;
        },
        {}
      );
      shadows.default = [2, 2, 4, 4, 6, 6]
        .map((blur) => `0 0 ${blur}px ${theme('colors').black}`)
        .join(', ');
      return shadows;
    },
    extend: {
      backgroundSize: {
        '250%': '250%',
      },
      colors: {
        transparent: 'transparent',
        black: colors.black,
        white: colors.white,
        rarity: {
          common: {
            light: '#2A2C2F',
            DEFAULT: '#989898',
            dark: '#121519',
          },
          uncommon: {
            light: '#243C47',
            DEFAULT: '#83D9FB',
            dark: '#101B23',
          },
          very_rare: {
            light: '#2A2044',
            DEFAULT: '#9976FA',
            dark: '#120E1E',
          },
          import: {
            light: '#451518',
            DEFAULT: '#EE3C3C',
            dark: '#1D0D10',
          },
          exotic: {
            light: '#424022',
            DEFAULT: '#EDD751',
            dark: '#1E1E15',
          },
          limited: {
            gradient: '#F7783966',
            // light: '#84442A80',
            DEFAULT: '#FF7E45',
            // dark: '#341E1A80',
            // light: '#422215',
            // dark: '#1A0F0D',
          },
          premium: {
            light: '#244839',
            DEFAULT: '#78F0B0',
            dark: '#0E1A19',
          },
        },
        paint: {
          crimson: '#d40001',
          lime: '#7efd01',
          black: '#111111',
          cobalt: '#3f51b4',
          sky_blue: '#3f51b4',
          burnt_sienna: '#4c1101',
          forest_green: '#4cae50',
          purple: '#9C27B0',
          pink: '#fd4080',
          orange: '#f3b301',
          grey: '#777777',
          titanium_white: '#FFFFFF',
          saffron: '#fdea3b',
          // TODO: Fill in BakkesMod hex color codes
          gold: '#000000',
          rose_gold: '#000000',
          white_gold: '#000000',
          onyx: '#000000',
          platinum: '#000000',
        },
      },
      maxWidth: {
        '7/8': '87.5%',
      },
    },
  },
  variants: {
    filter: ['responsive', 'after'],
    extend: {
      position: ['before', 'after'],
      zIndex: ['before', 'after'],
      inset: ['before', 'after'],
      backgroundImage: ['before'],
      gradientColorStops: ['before'],
      borderColor: ['after'],
      borderRadius: ['before', 'after'],
      borderWidth: ['after'],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-filters'),
    require('tailwindcss-pseudo-elements'),
    require('tailwindcss-textshadow'),
  ],
};
