//  @type {import('tailwindcss').Config} 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}", // Adjust path and extensions as needed
    
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient': 'linear-gradient(90deg, #129990, #096B68)',
      },
    },
  },
  plugins: [],
}

