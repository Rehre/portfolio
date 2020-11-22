module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "pallete-0": "#F8F9FA",
        "pallete-1": "#212529",
        "pallete-2": "#E9ECEF",
      },
      fontFamily: {
        default: ["Zilla Slab", "Open Sans", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [],
};
