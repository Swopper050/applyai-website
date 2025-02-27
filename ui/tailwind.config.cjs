/* eslint-env node */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#181944",
          "secondary": "#6c7ae0",
          "accent": "#5762d5",
          "neutral": "#2a2e57",
          "base-100": "#ffffff",
          "base-content": "#181944",
        }
      }
    ],
  }
}

