import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      backgroundImage: {
        "header-logo-mobile": "url('./assets/icons/hasa-logo-header.svg')",
        "footer-logo-mobile": "url('./assets/icons/hasa-logo-footer.svg')",
      },
      backgroundSize: {
        "header-logo-mobile": "100%",
        "footer-logo-mobile": "100%",
      },
      backgroundPosition: {
        "header-logo-mobile": "center",
        "footer-logo-mobile": "center",
      },

      colors: {
        "black-primary": "var(--clr-black-primary)",
        "dark-primary": "var(--clr-dark-primary)",
        "dark-secondary": "var(--clr-dark-secondary)",
        "dark-teritary": "var(--clr-dark-teritary)",
        "white-primary": "var(--clr-white-primary)",
        "white-secondary": "var(--clr-white-secondary)",
        "white-teritary": "var(--clr-white-teritary)",
        "gray-primary": "var(--clr-gray-primary)",
        "gray-secondary": "var(--clr-gray-secondary)",
        "gray-teritary": "var(--clr-gray-teritary)",
        "purple-primary": "var(--clr-purple-primary)",
        "purple-secondary": "var(--clr-purple-secondary)",
        "purple-teritary": "var(--clr-purple-teritary)",
        "purple-strong": "var(--clr-purple-strong)",
        "pink-primary": "var(--clr-pink-primary)",
        "pink-secondary": "var(--clr-pink-secondary)",
        "lightblue-primary": "var(--clr-lightblue-primary)",
        "lightblue-secondary": "var(--clr-lightblue-secondary)",
        "lightblue-teritary": "var(--clr-lightblue-teritary)",
        "blue-primary": "var(--clr-blue-primary)",
        "blue-secondary": "var(--clr-blue-secondary)",
        "blue-teritary": "var(--clr-blue-teritary)",
      },
      fontFamily: {
        gilroy: ["Gilroy", "sans-serif"],
      },
      screens: {
        "max-md": { max: "768px" },
        "max-sm": { max: "640px" },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newFontWeights = {
        ".font-gilroy-regular": {
          fontFamily: "Gilroy, sans-serif",
          fontWeight: "400",
        },
        ".font-gilroy-medium": {
          fontFamily: "Gilroy, sans-serif",
          fontWeight: "500",
        },
        ".font-gilroy-bold": {
          fontFamily: "Gilroy, sans-serif",
          fontWeight: "700",
        },
        ".font-gilroy-black": {
          fontFamily: "Gilroy, sans-serif",
          fontWeight: "900",
        },
      };
      addUtilities(newFontWeights);
    },
  ],
};

export default config;
