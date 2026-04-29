import('tailwindcss').Config
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'guardsense-blue-light': '#0097B2', 
        'guardsense-blue-dark': '#00404C', 
        'guardsense-button': '#0097B2',    
        'guardsense-darker-blue': '#002C36',
        'guardsense-ocean': '#005F73',
      },
      backgroundImage: {
        'gradient-guardsense': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
      },

      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-50px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: 0, transform: 'translateX(50px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        pulseGlow: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 rgba(0, 151, 178, 0.4)' },
          '50%': { transform: 'scale(1.03)', boxShadow: '0 0 15px rgba(0, 151, 178, 0.7)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },

      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s infinite ease-in-out',
        'float-slow': 'float 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}