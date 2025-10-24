/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            1: '#161616',
            2: '#595959',
            3: '#9C9C9C',
            4: '#DADADA',
            5: '#F4F4F4',
            6: '#FDFDFD',
            accent: '#22A0BC',
          },
        },
      },
    },
    plugins: [],
  }