const designSystem = require("./design-system/tailwind-design-system");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: { ...designSystem }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
