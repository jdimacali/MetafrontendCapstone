/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        markazi: ['"Markazi Text"'],
        karla: ['"Karla"'],
      },
    },
  },
  plugins: [],
};
