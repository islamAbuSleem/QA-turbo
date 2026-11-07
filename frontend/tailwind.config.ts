import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        qt: {
          blue: '#2563EB',
          'blue-hover': '#1D4ED8',
          green: '#059669',
          bg: '#F8FAFC',
          fg: '#0F172A',
          card: '#FFFFFF',
          mut: '#F1F5FD',
          mutfg: '#475569',
          bd: '#E4ECFC',
          red: '#DC2626',
          'red-bg': '#FEF2F2',
          'red-bd': '#FECACA',
          'red-fg': '#991B1B',
        },
      },
      fontFamily: {
        sans: ['"Fira Sans"', 'system-ui', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      borderRadius: {
        qt: '12px',
        'qt-sm': '8px',
      },
    },
  },
  plugins: [],
}
