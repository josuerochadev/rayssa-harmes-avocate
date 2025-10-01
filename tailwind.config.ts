import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Terracotta palette - warm and welcoming
        primary: {
          DEFAULT: '#A85840',  // Terracotta principal (plus doux)
          dark: '#8B4332',     // Terracotta foncé
          light: '#C67A5F',    // Terracotta clair
        },
        secondary: {
          DEFAULT: '#F9F6F2',  // Beige très clair
          dark: '#F0EAE1',     // Beige moyen
        },
        accent: {
          DEFAULT: '#D4A574',  // Or discret / sable doré
          light: '#E8C9A0',    // Or clair
        },
        neutral: {
          50: '#FAFAF9',
          100: '#F5F5F4',
          200: '#E7E5E4',
          300: '#D6D3D1',
          400: '#A8A29E',
          500: '#78716C',
          600: '#57534E',
          700: '#44403C',
          800: '#292524',
          900: '#1C1917',
        },
        success: '#2D5F3F',   // Vert forêt discret
        warning: '#B8860B',   // Or foncé
        error: '#8B3A3A',     // Bordeaux
      },
      fontFamily: {
        'slab': ['Roboto Slab', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.125rem' }],
        'sm': ['0.875rem', { lineHeight: '1.375rem' }],
        'base': ['1.125rem', { lineHeight: '1.75rem' }],  // 18px for better readability
        'lg': ['1.25rem', { lineHeight: '1.875rem' }],
        'xl': ['1.5rem', { lineHeight: '2rem' }],
        '2xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '3xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '4xl': ['2.75rem', { lineHeight: '3rem' }],
        '5xl': ['3.5rem', { lineHeight: '1.1' }],
        '6xl': ['4rem', { lineHeight: '1' }],
      },
      borderRadius: {
        'button': '1rem',      // 16px - more modern
        'card': '1.25rem',     // 20px - for cards
      },
      maxWidth: {
        'prose': '65ch',       // Optimal reading width
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(168, 88, 64, 0.1), 0 4px 6px -2px rgba(168, 88, 64, 0.05)',
        'soft-lg': '0 10px 25px -5px rgba(168, 88, 64, 0.15), 0 8px 10px -6px rgba(168, 88, 64, 0.1)',
      },
    },
  },
  plugins: [],
}

export default config