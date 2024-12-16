/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        sleeper: "url('/src/img/sleeper.png')",
        'sleeper-green': "url('/src/img/sleeper-green.png')",
      },
    },
  },
  plugins: [],
};
