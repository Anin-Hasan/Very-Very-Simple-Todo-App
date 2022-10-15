/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 1.5s ease-in-out",
      },
      keyframes: {
        wiggle: {
          "0%": { opacity: 0, transform: "translateY(-80px)" },
          "100%": { opacity: 1 },
        },
      },
      fontFamily: {
        Poppins: "Poppins",
      },
      backgroundImage: {
        batman:
          "radial-gradient(at center top, rgb(154, 177, 199) 0%, rgb(26, 36, 47) 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
