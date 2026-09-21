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
        obsidian: {
          950: '#030305',
          900: '#07070b',
          850: '#0c0c12',
          800: '#111118',
        },
        graphite: {
          900: '#14141e',
          800: '#1a1a27',
          700: '#232334',
          600: '#2f2f45',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(0, 240, 255, 0.25)',
        },
        cyan: {
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#00f0ff',
          600: '#0ea5e9',
          700: '#0284c7',
        },
        violet: {
          400: '#c084fc',
          500: '#a855f7',
          600: '#8b5cf6',
          700: '#7c3aed',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          hover: '#20bd5a',
        },
      },
      fontFamily: {
        heading: ['var(--font-manrope)', 'Manrope', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(0, 240, 255, 0.35)',
        'glow-violet': '0 0 25px -5px rgba(139, 92, 246, 0.35)',
        'card-dark': '0 4px 20px -2px rgba(0, 0, 0, 0.7), 0 0 1px 1px rgba(255, 255, 255, 0.05)',
        'card-hover': '0 10px 30px -5px rgba(0, 0, 0, 0.8), 0 0 1px 1px rgba(0, 240, 255, 0.3)',
      },
      backgroundImage: {
        'cyber-grid': 'radial-gradient(circle at 50% 50%, rgba(0, 240, 255, 0.05) 0%, transparent 70%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;