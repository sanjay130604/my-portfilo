module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purplePrimary: "#8b5cf6", // main purple for pills & accents
        purpleDark: "#6f2eea",
        deepBg: "#0b0f17"
      },
      fontFamily: {
        display: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 12px 40px rgba(15, 23, 42, 0.15)",
        card: "0 20px 40px rgba(2,6,23,0.25)"
      },
      borderRadius: {
        'xl-2': '18px',
        'xxl': '28px'
      }
    },
  },
  plugins: [],
}
