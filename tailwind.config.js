module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        "-10": "-10",
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
      typography: (theme) => ({
        DEFAULT: {
          css: {
            fontWeight: 400,
            fontFamily: theme("fontFamily.sans").join(", "),
            color: theme("colors.gray.900"),
            "h1, h2, h3, h4, h5, h6, blockquote": {
              fontWeight: 400,
              color: theme("colors.gray.900"),
              strong: {
                color: theme("colors.gray.900"),
              },
            },
            ol: {
              li: {
                "&:before": { color: theme("colors.gray.900") },
              },
            },
            ul: {
              li: {
                "&:before": { backgroundColor: theme("colors.gray.900") },
              },
            },
            blockquote: {
              borderColor: theme("colors.gray.400"),
              p: {
                color: theme("colors.gray.600"),
              },
            },
            p: {
              margin: theme("margin.0"),
              img: {
                margin: theme("margin.0")
              }
            },
          },
        },
      }),
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
  plugins: [require("@tailwindcss/typography")],
};
