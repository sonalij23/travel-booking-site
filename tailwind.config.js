/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
   
    extend: {

     
      colors:{
        'primary-color':'#faa935',
        'secondary-color':'#ee5a58',
        'orange':'#fc842c',
        'newsletter-blue':'#d0e4f4',
      },

      screens:{
        'xs': '280px',
        'sm':'500px',
        'md': '800px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
          
  
      },
    },
  },
  plugins: [],
};
