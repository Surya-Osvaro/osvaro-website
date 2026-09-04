import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        sand: {
          50: '#FAF8F4',
          100: '#F5F0E8',
          200: '#EDE5D8',
          300: '#E0D6C4',
          400: '#D4CEBC',
          500: '#C4BAA4',
          600: '#A89E88',
          700: '#8C836E',
          800: '#706A58',
          900: '#585345',
        },
        olive: {
          50: '#F0F3EC',
          100: '#DDE4D5',
          200: '#BCC9AA',
          300: '#9AAE7F',
          400: '#7F9A62',
          500: '#6B7F4E',
          600: '#566840',
          700: '#435133',
          800: '#313B26',
          900: '#20271A',
        },
        charcoal: {
          50: '#F5F5F5',
          100: '#E5E5E5',
          200: '#CCCCCC',
          300: '#B3B3B3',
          400: '#999999',
          500: '#6B6B6B',
          600: '#525252',
          700: '#3D3D3D',
          800: '#2A2A2A',
          900: '#1A1A1A',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        border: 'var(--border)',
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'heading-1': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'heading-2': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading-3': ['1.5rem', { lineHeight: '1.3' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body': ['1rem', { lineHeight: '1.7' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
        'caption': ['0.75rem', { lineHeight: '1.5' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        'sm': '0.375rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
