import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridAutoColumns: {
        '1': '1fr',
        '2': '1fr 1fr',
        '3': '1fr 1fr 1fr',
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config
