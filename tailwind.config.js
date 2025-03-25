/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cs-blue": "rgba(30,7,144,1)",
        "cs-yellow": "rgba(253,100,69,1)"
      }
    },
  },
  plugins: [],
}

