/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "main-banner": "url('/src/assets/main-bg.png')",
        "mobile-banner": "url('/src/assets/mobile-banner.png')",
        "section-container": "url('/src/assets/bgAbstract.png')",
        "overlay-top":
          "linear-gradient(0deg, rgba(244, 244, 244, 0) 0%, #0c130ed1 100%);",
        "overlay-bottom":
          "linear-gradient(180deg, rgba(244, 244, 244, 0) 0%, #0c130e99 55%);",
      },
      backgroundColor: {
        wppButton: "#14A77A",
        blueAlmendra: "#003551",
        ppalColor: "#F8E8D3",
      },
      textColor: {
        "opaque-green": "#14A77A",
        "bright-green": "#00A87B",
        "almendra-blue": "#003551",
        cream: "#F4EFE5",
        "dark-cream": "#E7C19A",
        "color-regular": "#3C4351",
      },
      colors: {
        cream: "#F4EFE5",
        abstractCream: "#fefaf1",
        "color-regular": "#3C4351",
        "accent-color-hover": "#A63823",
        ppalColor: "#F8E8D3",
      },
      screens: {
        bigPortatil: "1650px",
      },
    },
  },
  plugins: [],
};
