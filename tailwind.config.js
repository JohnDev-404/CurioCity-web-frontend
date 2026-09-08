export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 1. BACKGROUND: Warm cream paper texture
        cream: {
          50: '#FCF9F2',
          100: '#F8F0E3',
          200: '#F0E4D0',
        },
        
        // 2. PRIMARY: Deep Plum (The soul of CurioCity)
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4C1D95', // Signature deep plum
        },
        
        // 3. SECONDARY: Terracotta (Warm, clickable, human)
        terracotta: {
          50: '#fef4f0',
          100: '#fde4db',
          200: '#fbc8b8',
          300: '#f8a894',
          400: '#f2846a',
          500: '#E65C3A', // Signature terracotta
          600: '#d44a2a',
          700: '#b83a1e',
          800: '#963016',
          900: '#7a2812',
        },
        
        // 4. ACCENT: Sunflower Gold (Happy highlights)
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#F5A623', // Signature gold
          500: '#e59b1a',
          600: '#c98112',
          700: '#a8620e',
          800: '#8a4f0b',
          900: '#6f3f08',
        },
        
        // Neutral grays with a warm tint (never pure gray)
        gray: {
          50: '#faf8f6',
          100: '#f0ece8',
          200: '#ddd6d0',
          300: '#c4bbb5',
          400: '#a69991',
          500: '#8a7d75',
          600: '#6e625b',
          700: '#564c46',
          800: '#3d3531',
          900: '#26211e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}