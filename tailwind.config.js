const { list } = require("postcss");
const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
    "./posts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        100: "100",
        "-10": "-10",
        "-100": "-100",
      },
      spacing: {
        66: "16.5rem",
      },
      gridTemplateRows: {
        12: "repeat(12, minmax(0, 1fr))",
      },
      gridTemplateColumns: {
        13: "repeat(13, minmax(0, 1fr))",
      },
      gridRow: {
        "span-7": "span 7 / span 7",
        "span-8": "span 8 / span 8",
        "span-9": "span 9 / span 9",
        "span-10": "span 10 / span 10",
        "span-11": "span 11 / span 11",
        "span-12": "span 12 / span 12",
      },
      colors: {
        orange: colors.orange,
        truegray: colors.trueGray,
        warmgray: colors.warmGray,
      },
      transformOrigin: {
        "bottom-center": "bottom center",
      },
      animation: {
        "spin-slow": "spin 2s linear infinite",
        grow: "grow 1.5s linear infinite",
      },
      keyframes: {
        grow: {
          "50%": { transform: "scale(1)" },
        },
      },
    },
    fontFamily: {
      sans: ["Noto Sans", "sans-serif"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      minus: "'-  '",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".animate-delay-750": {
          "animation-delay": "750ms",
        },
      });
    }),
  ],
};
