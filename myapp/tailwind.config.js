/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      container: {
        padding: {
          DEFAULT: '20px',
          lg: '0',
        },
      },
      backgroundImage: {
        hero: "url('https://images.pexels.com/photos/2284166/pexels-photo-2284166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        about: "url('/src/img/about/image.png')",
        interview: "url('/src/img/interview/bg.png')",
      },
    },
  },
  plugins: [],
}
