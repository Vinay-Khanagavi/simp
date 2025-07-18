/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./services/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Using the existing color scheme from Colors.ts
        primary: {
          light: '#0a7ea4',
          dark: '#fff',
        },
        text: {
          light: '#11181C',
          dark: '#ECEDEE',
        },
        background: {
          light: '#fff',
          dark: '#151718',
        },
        icon: {
          light: '#687076',
          dark: '#9BA1A6',
        },
        tabIcon: {
          default: '#687076',
          selected: '#0a7ea4',
        },
      },
    },
  },
  plugins: [],
} 