/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center:true,
      padding:'25px',
    },
    extend: {
      colors:{
        primary:'#4f46e5',
        dark:'#0f172a',
        secondary:'#64748b',
      },
      zIndex: {
        '9999': 9999,
      },
      screens:{
        '2xl':'1536px',
      }
      
      
    },
  },
  plugins: [],
}

