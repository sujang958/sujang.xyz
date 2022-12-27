/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        // pretendard: [
        //   "Pretendard Variable",
        //   "-apple-system",
        //   "Noto Sans KR",
        //   "sans-serif",
        // ],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "not-black": "#161616",
      },
    },
  },
  plugins: [],
}
