/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      headingFirst:"#010f1c",
      headingSecondary:"#021d35",
    },
    contaiber:{
      cener:true,
      padding:"15px",
    },
    fontFamily:{
      primary:"Poppins",
      secondary:"Pacifico"
    }
  },
  plugins: [],
}

