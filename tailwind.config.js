/** @type {import('tailwindcss').Config} */
import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme'

export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
]
export const theme = {
  darkMode: 'class',
  safelist: [{
    pattern: /(bg|text|border)-(grey|brown|orange|yellow|green|blue|purple|pink|red)-(.+)/
  }],
  extend: {
    colors: {
      light: {
        50: '#fdfdfd',
        100: '#fcfcfc',
        200: '#fafafa',
        300: '#f8f9fa',
        400: '#f6f6f6',
        500: '#f2f2f2',
        600: '#f1f3f5',
        700: '#e9ecef',
        800: '#dee2e6',
        900: '#dde1e3',
      },
      dark: {
        50: '#4a4a4a',
        100: '#3c3c3c',
        200: '#323232',
        300: '#2d2d2d',
        400: '#222222',
        500: '#1f1f1f',
        600: '#1c1c1e',
        700: '#1b1b1b',
        800: '#181818',
        900: '#0f0f0f',
      },
    },
    fontFamily: {
      sans: ['Inter', 'Noto Sans SC', ..._fontFamily.sans],
    },
  }
}
export const plugins = []

