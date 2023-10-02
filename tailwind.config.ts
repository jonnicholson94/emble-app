import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xxs': "200px",
      'xs': "300px",
      'sm': '640px',
      '2sm': '700px',
      'md': '768px',
      'nm': '900px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      "black": "#000000",
      "white": "#ffffff",
      "altBackground": "#111111",
      "border": "#222222",
      "altBorder": "#333333",
      "offWhite": "#F9F9F9",
      "paleGrey": "#e9e9e9",
      "warning": "#E25E3E",
      "pinkCta": "#E4A5FF",
      "delete": "#C70039",
      "blue": "#9EDDFF",
      "red": "#FF6969",
      "lilac": "#E5CFF7",
      "purple": "#FFA1F5",
      "salmon": "#EF9595",
      "green": "#96C291",
      "midnight": "#00004C",
    },
    borderRadius: {
      'none': '0',
      'sm': '3px',
      'md': '5px',
      'lg': '10px',
      'rnd': '50%'
    },
    extend: {
      backgroundImage: {
        'homepage-pattern': "url('/background.svg')"
      }
    },
  },
  plugins: [],
}
export default config
