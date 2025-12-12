/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#AED998",
        secondary: "#57534E", // stone-600
        dark: "#0C0A09", // stone-950
        light: "#E7E5E4", // stone-200
        "rad-outer": "#292524", // stone-800"
        "rad-inner": "#444",
      },
      backgroundImage: {
        "sleeper-green": "url('/public/img/companies/sleeper-green.png')",
        drive: "url('/public/img/companies/drive.png')",
        "order-41": "url('/public/img/logo-secondary.png')",

        // info: (DIAMETER at X Y, colorCenter, colorEdge)
        rad: "radial-gradient(circle 70vh at 50% 50vh, #44403c, transparent);",
        "rad-red":
          "radial-gradient(circle 70vh at 50% 85vh, #A71504AA, transparent);",
        "rad-orange":
          "radial-gradient(circle 70vh at 50% 85vh, #e37235, #1d0505);",
        "rad-white":
          "radial-gradient(circle 70vh at 50% 50vh, #e7e3dd, #d0d0d099);",
        "rad-black":
          "radial-gradient(circle 80vh at 50% 50vh, #44403c, #0e1000);",
        "rad-blue":
          "radial-gradient(circle 80vh at 50% 50vh, #301e22, #030819);",
      },
      animation: {
        "not-found": "5s notFound",
      },
      height: {
        "full-header": "calc(100vh - 3.5rem)",
        "full-header-mobile": "calc(100vh - 3.25rem)",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
