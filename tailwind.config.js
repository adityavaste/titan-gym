/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a0a0a',
        secondary: '#141414',
        accent: '#e63946',
        'accent-hover': '#ff4d5a',
        'text-primary': '#f1f1f1',
        'text-secondary': '#b0b0b0',
        'text-muted': '#777777',
        'card-bg': 'rgba(20, 20, 20, 0.7)',
        'glass': 'rgba(20, 20, 20, 0.65)',
        'glass-border': 'rgba(255, 255, 255, 0.1)',
        'border-custom': 'rgba(255, 255, 255, 0.08)',
        'success': '#22c55e',
        'warning': '#f59e0b',
        'error': '#ef4444',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        'radius': '16px',
        'radius-sm': '8px',
      },
      transitionDuration: {
        '300': '300ms',
      },
    },
  },
  plugins: [],
}
