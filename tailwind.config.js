/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // "ink" = near-black, used for button text and dark overlay chips.
        ink: '#0b0b0c',
        accent: {
          DEFAULT: '#000080', // classic Windows navy
          soft: '#1084d0', // classic title-bar blue
        },
        desktop: {
          DEFAULT: '#008080', // classic teal desktop
          deep: '#004d4d',
        },
        face: {
          DEFAULT: '#c0c0c0', // window/button face grey
          light: '#dfdfdf',
          dark: '#808080',
        },
      },
      fontFamily: {
        sans: ['Tahoma', '"Segoe UI"', 'Verdana', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        display: ['Verdana', 'Tahoma', '"Segoe UI"', 'Arial', 'sans-serif'],
        mono: ['"Courier New"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
}
