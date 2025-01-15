module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00d172',
        secondary: '#FF9800',
        background: '#F5F5F5',
        text: '#333333',
        accentText: '#FFFFFF',
        error: '#F44336',
        success: '#4CAF50',
        bannerBg:"#F5F5F5",
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
