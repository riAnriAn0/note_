/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    
    extend: {
      colors: {
        "verde-escuro":"#29684d",
        "verde-escuro-2":"#307a59",
        "verde-claro":"#e4f1ec",
        "claro":"#eaf3f0",
        "preto":"#111111",
        "cinza":"#242424",
      },
    },
  },
  plugins: [],
}

