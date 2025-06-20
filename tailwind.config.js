// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        scalePulse: 'scalePulse 0.5s ease-in-out infinite',
        scaleBlastStrong: 'scaleBlastStrong 1s ease-in-out infinite',
      },
      keyframes: {
        scalePulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
        scaleBlastStrong: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.5)' },
        },
      },
    },
  },
  plugins: [],
};
