module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        'mobile-screen': '85vh',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
