/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#AED998",
      },
      backgroundImage: {
        "sleeper-green": "url('/public/img/sleeper-green.png')",
        drive: "url('/public/img/drive.png')",
        "drive-black": "url('/public/img/drive-black.png')",
        "order-41": "url('/public/img/logo-secondary.png')",

        // info: (DIAMETER at X Y, colorCenter, colorEdge)
        rad: "radial-gradient(circle 70vh at 50% 50vh, #444, transparent);",
        "rad-red":
          "radial-gradient(circle 70vh at 50% 85vh, #A71504AA, transparent);",
        "rad-white":
          "radial-gradient(circle 70vh at 50% 50vh, #e7e3dd, #d0d0d099);",
      },
      animation: {
        "not-found": "5s notFound",
      },
      height: {
        "full-header": "calc(100vh - 3.5rem)",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
