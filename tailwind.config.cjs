/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    
  ],
  theme: {
    extend: {
      colors: {
        nave: "#101010",
        web: "#222831",
        txt: "#EEEEEE",
        btn : "#FF5722",
        bg : "#2D4059"

    },
  },
},
  plugins: [
    require('flowbite/plugin')
  ],
}