/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      pre: ["Pretendard"],
    },
    extend: {
      colors: {
        gray: "#909090",
      },
      boxShadow: {
        button: "0px 0px 6px 0px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
