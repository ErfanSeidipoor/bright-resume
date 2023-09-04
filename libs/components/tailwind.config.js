const { createGlobPatternsForDependencies } = require("@nx/react/tailwind");
const { join } = require("path");

module.exports = {
  content: [
    join(
      __dirname,
      "{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}"
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF8C32",
        secondary: " #2B3159",
      },
      fontFamily: "Montserrat",
    },
  },
  plugins: [],
};
