/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "verde-escuro":"#29684d",
        "verde-escuro-2":"#307a59",
        "verde-claro":"#e4f1ec",
        "claro":"#eaf3f0",
        "preto":"#111111",
        "cinza":"#242424",
      },
      screens: {
        'max-xs': { 'max': '575px' },
        'max-sm': { 'max': '767px' },
        'max-md': { 'max': '991px' },
        'max-lg': { 'max': '1199px' },
        'max-xl': { 'max': '1399px' },
      }
    }
  },
  plugins: [],
}

