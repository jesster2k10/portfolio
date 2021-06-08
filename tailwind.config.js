module.exports = {
  purge: [],
  theme: {
    extend: {
      screens: {
        light: { raw: '(prefers-color-scheme: light)' },
        dark: { raw: '(prefers-color-scheme: dark)' },
      },
      fontFamily: {
        code:
          'JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      },
      colors: {
        light: 'rgba(0, 0, 0, 0.4)',
        deepSea: {
          50: '#F4F4F5',
          100: '#E8E9EB',
          200: '#C6C8CE',
          300: '#A4A7B0',
          400: '#5F6474',
          500: '#1B2239',
          600: '#181F33',
          700: '#101422',
          800: '#0C0F1A',
          900: '#080A11',
        },
        nightSky: {
          50: '#F5F6F6',
          100: '#ECECED',
          200: '#CFD0D3',
          300: '#B1B4B8',
          400: '#777B83',
          500: '#3D434E',
          600: '#373C46',
          700: '#25282F',
          800: '#1B1E23',
          900: '#121417',
        },
      },
    },
  },
  variants: {},
  plugins: [
    function darkModePlugin({ addBase, config }) {
      addBase({
        body: {
          color: config('theme.colors.black'),
          backgroundColor: config('theme.colors.white'),
        },
        '@screen dark': {
          body: {
            color: config('theme.colors.white'),
            backgroundColor: config('theme.colors.deeps-sea.500'),
          },
        },
      });
    },
  ],
};
