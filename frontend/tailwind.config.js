/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center:true
    },
    extend: {
      colors: {
        'custom-gray': '#f9f8f8',
        'custom-red':'#fe748c',
        'custom-black':'#60646c',
        'custom-ash':'#a1a1a1',
        'custom-black2':'#747474'
      },
      backgroundImage:{
        'custom-image':"url('https://i.imgur.com/n9Yrmhm.png')",
      }
    },
  },
  plugins: [],
}

