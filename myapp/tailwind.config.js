/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      primary: 'Oswald',
      secondary: 'Raleway',
      tertiary: 'Rozha One',
    },
    container: {
      padding: {
        DEFAULT: '20px',
        lg: '0',
      },
    },
    extend: {
      backgroundImage: {
        'hero': "linear-gradient(rgba(0,0,0,.8), rgba(0,0,0, .8)), url('../public/hero.png')",
        about: "url('/src/img/about/image.png')",
        interview: "url('/src/img/interview/bg.png')",
      },
      colors: {
        dark: '#111111',
        grey: {
          DEFAULT: '#555555',
        },
      },
    },
  },
  plugins: [],
};
