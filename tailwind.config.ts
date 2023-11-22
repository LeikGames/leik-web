import type { Config } from 'tailwindcss'
const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'leik-red': '#E99090',
        'leik-blue': '#86A7FA',
        'leik-gray': '#D9D9D9',
        'leik-yellow': '#F2D396',
      },
    },
    fontFamily: {
      'sans': ['var(--font-jost)', ...defaultTheme.fontFamily.sans],
      'serif': ['var(--font-jost)', ...defaultTheme.fontFamily.serif],
      'mono': ['var(--font-jost)', ...defaultTheme.fontFamily.mono],
      'display': ['var(--font-josefin-sans)', ...defaultTheme.fontFamily.mono],
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
export default config
