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
      "border": "#c9c9c9",
      "offWhite": "#F9F9F9",
      "paleGrey": "#e9e9e9",
      "warning": "#E25E3E",
      "pinkCta": "#E4A5FF",
    },
    borderRadius: {
      'none': '0',
      'sm': '3px',
      'md': '5px',
      'lg': '10px',
      'rnd': '50%'
    },
    extend: {
      
    },
  },
  plugins: [],
}
export default config
