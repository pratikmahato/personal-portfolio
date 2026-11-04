/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: {
    colors: { ink: '#10110f', panel: '#171916', line: '#30332d', acid: '#c7f36b', muted: '#a2a69b' },
    fontFamily: { sans: ['Manrope', 'sans-serif'], mono: ['DM Mono', 'monospace'] },
    boxShadow: { glow: '0 0 70px rgba(199,243,107,.12)' }
  }},
  plugins: [],
}
