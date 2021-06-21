module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  mode: "jit",
  theme: {
    extend: {
      typography: (theme) => ({
        light: {
          css: {
            color: "#adbac7",

            h1: {
              color: theme("colors.gray.300"),
              bordercolor: "#373e47",
            },

            h2: {
              color: theme("colors.gray.300"),
              bordercolor: "#373e47",
            },

            h3: {
              color: theme("colors.gray.300"),
            },

            h4: {
              color: theme("colors.gray.300"),
            },

            h5: {
              color: theme("colors.gray.300"),
            },

            a: {
              color: "#539bf5",
            },

            code: {
              color: theme("colors.gray.300"),
              backgroundcolor: "#3c4149",
            },

            pre: {
              backgroundcolor: theme("colors.gray.700"),
              backgroundcolor: "#2d333b",
            },

            strong: {
              color: theme("colors.gray.300"),
            },

            blockquote: {
              borderleftcolor: "#4f5864",
              collor: "#768390",
            },
          },
        },

        default: {
          css: {
            collor: "#41464a",

            h1: {
              fontweight: theme("fontweight.semibold"),
              borderbottom: `1px solid #ebedef`,
              paddingbottom: theme("spacing.3"),
              marginbottom: theme("spacing.0"),
            },

            h2: {
              fontweight: theme("fontweight.semibold"),
              borderbottom: `1px solid #ebedef`,
              paddingbottom: theme("spacing.2"),
              marginbottom: theme("spacing.3"),
              margintop: theme("spacing.6"),
            },

            p: {
              marginbottom: theme("spacing.3"),
              margintop: theme("spacing.3"),
            },

            strong: {
              fontweight: theme("fontweight.semibold"),
            },

            code: {
              borderradius: theme("borderradius.default"),
              fontweight: theme("fontweight.normal"),
              background: theme("colors.gray.100"),
              padding: theme("spacing.1"),
              "&::before": {
                display: "none",
              },
              "&::after": {
                display: "none",
              },
            },

            a: {
              color: "#0066d6",
              textdecoration: "none",
              "&:hover": {
                textdecoration: "underline",
              },
            },

            li: {
              marginbottom: theme("spacing.1"),
              margintop: theme("spacing.1"),
            },

            blockquote: {
              fontweight: theme("fontweight.normal"),
              borderleftcolor: "#e0e3e6",
              fontstyle: "none",
              color: "#6a737d",
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
