const { list } = require("postcss");
const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");
const { setLocale } = require("yup");

module.exports = {
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
        neutral: colors.neutral,
        stone: colors.stone,
      },
      transformOrigin: {
        "bottom-center": "bottom center",
      },
      animation: {
        "spin-slow": "spin 2s linear infinite",
        grow: "grow 1.5s linear infinite",
        "slide-in": "slideIn 2s ease-in-out",
        "fadein-1500-1700": "fadein 1500ms 1700ms ease-in-out 1 both",
        "fadein-1500-1900": "fadein 1500ms 1900ms ease-in-out 1 both",
        "fadein-1500-2100": "fadein 1500ms 2100ms ease-in-out 1 both",
        "fadein-1500-2300": "fadein 1500ms 2300ms ease-in-out 1 both",
        "fadein-1500-2500": "fadein 1500ms 2500ms ease-in-out 1 both",
        "fadein-1500-2700": "fadein 1500ms 2700ms ease-in-out 1 both",
        "fadein-1500-2900": "fadein 1500ms 2900ms ease-in-out 1 both",
      },
      keyframes: {
        grow: {
          "50%": { transform: "scale(1)" },
        },
        slideIn: {
          from: {
            position: "relative",
            "margin-left": "-30px",
          },
          to: {
            position: "relative",
            "margin-left": "0px",
          },
          "0%": {
            opacity: "10%",
          },
          "100%": {
            opacity: "100%",
          },
        },
        fadein: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
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
