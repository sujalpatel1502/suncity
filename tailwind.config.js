/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        'logoblack': '#323C45',
        'logoblue':'#183C6A',
        'logogreen': '#4AAB3D',
        'logoorange':'#ED5B2B'
      },
    },
  },
  plugins: [],
}

