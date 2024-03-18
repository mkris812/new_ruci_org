/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customBlue: '#FFC300',
        secondaryc: '#FFC300',
        gradient: 'linear-gradient(to right, #8448FF, #00B4D8)',
        primary: {
          DEFAULT: '#FFD700', // Yellow color
        },
      },
      animation: {
        'spin-slow': 'spin 50s linear infinite', // Slow spin animation
        'spin-slow-reverse': 'spin 50s linear infinite reverse', // Opposite spin animation

      },
    },
  },
  plugins: [],
};
