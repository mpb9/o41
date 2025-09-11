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
        "google-drive": "url('/public/img/google-drive.png')",
        // info: (DIAMETER at X Y, colorCenter, colorEdge)
        rad: "radial-gradient(circle 70vh at 50% 50vh, #444, transparent);",
        "rad-red":
          "radial-gradient(circle 70vh at 50% 85vh, #A71504AA, transparent);",
      },
      animation: {
        "not-found": "5s notFound",
      },
      height: {
        "full-header": "calc(100vh - 4rem)",
      },
    },
  },
  plugins: [],
};
