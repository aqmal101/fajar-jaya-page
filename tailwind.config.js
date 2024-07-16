/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "aditya-putra": "url('/assets/team/aditya_putra.jpg')",
        "alva-lidya": "url('/assets/team/alva_lidya.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        calc: "calc(100% - 100px)",
        smcalc: "calc(100% - 40px)",
      },
    },
  },
  plugins: [],
};
