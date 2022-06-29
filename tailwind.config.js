module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: [
          "Pretendard Variable",
          "-apple-system",
          "Apple SD Gothic Neo",
          "Noto Sans KR",
          "sans-serif",
        ],
      }
    },
  },
  plugins: [],
}
