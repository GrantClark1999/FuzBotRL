const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./dist/**/*.html', './dist/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    filter: {
      none: 'none',
      blur: 'blur(1px)',
      brightness: 'brightness(200%)',
      'menu-active':
        'brightness(0.5) sepia(1) saturate(10000%) hue-rotate(192deg) brightness(95%)',
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
        250: '250%',
      },
      colors: {
        transparent: 'transparent',
        black: colors.black,
        white: colors.white,
        // Custom Colors
        navbar: {
          DEFAULT: '#294476',
          arrow: '#00101E',
          gradient: { b: '#42AEFF1F', t: '#42AEFF99' },
          item: '#005F8E',
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
        rarity: {
          common: {
            gradient: {
              b: '#2A2C2F',
              t: '#121519',
              // b: '#7DD9FD66',
              // t: 'transparent',
            },
            DEFAULT: '#989898',
          },
          uncommon: {
            gradient: {
              b: '#243C47',
              t: '#101B23',
              // b: '#7DD9FD66',
              // t: 'transparent',
            },
            DEFAULT: '#83D9FB',
          },
          very_rare: {
            gradient: {
              b: '#2A2044',
              t: '#120E1E',
              // b: '#9E7CFC66',
              // t: 'transparent',
            },
            DEFAULT: '#9976FA',
          },
          import: {
            gradient: {
              b: '#451518',
              t: '#1D0D10',
              // b: '#E35A5266',
              // t: 'transparent',
            },
            DEFAULT: '#EE3C3C',
          },
          exotic: {
            gradient: {
              b: '#424022',
              t: '#1E1E15',
              // b: '#ECDB6C66',
              // t: 'transparent',
            },
            DEFAULT: '#EDD751',
          },
          black_market: {
            gradient: {
              b: '#2906AFBF',
              t: '#EF07D9BF',
            },
            DEFAULT: '#FE00BE',
          },
          limited: {
            gradient: {
              b: '#422215',
              t: '#1A0F0D',
              // b: '#F7793966',
              // t: 'transparent',
            },
            DEFAULT: '#FF7E45',
          },
          premium: {
            gradient: {
              b: '#244839',
              t: '#0E1A19',
              // b: '#6bf1ae66',
              // t: 'transparent',
            },
            DEFAULT: '#78F0B0',
          },
        },
      },
      maxWidth: {
        '7/8': '87.5%',
      },
      boxShadow: {
        glow: '0 -2px 8px #42AEFF',
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ['hover'],
      borderColor: ['after'],
      borderRadius: ['after'],
      borderWidth: ['after'],
      inset: ['after'],
      position: ['after'],
      width: ['hover'],
      zIndex: ['after'],
    },
    filter: ['responsive', 'hover', 'after'],
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-filters'),
    require('tailwindcss-pseudo-elements'),
    require('tailwindcss-textshadow'),
    require('tailwindcss-blend-mode')(),
  ],
};
