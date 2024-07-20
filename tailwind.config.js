/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'thrindle-yellow': '#FE9800',
        'thrindle-deep-blue': '#07355D',
        'thrindle-blue': '#065DA7',
        'thrindle-pastel-yellow': '#FFFBF4',
        'thrindle-gray': '#F9F9F900',
      },

      fontFamily : {
        'inter-tight': ['"Inter Tight"', 'sans-serif'],
      },

      container : {
        center: true,
      }
    },
  },
  plugins: [],
}

