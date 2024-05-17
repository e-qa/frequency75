/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.html', './*.js', './src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#000000',
        'text-primary': '#',
        'text-secondary': '#',
        'text-accent': '#',
        'text-white': '#F',
        'border-color': '#ffb02d',
      },
      fontFamily: {
        redditsans: ['Reddit Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
