/** @type {import('tailwindcss').Config} */
// https://uicolors.app/create
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#f2f9fd',
          '100': '#e4f0fa',
          '200': '#c3e1f4',
          '300': '#8ecaeb',
          '400': '#52aede',
          '500': '#2c94cb',
          '600': '#1f7eb7',
          '700': '#195f8b',
          '800': '#185174',
          '900': '#194361',
          '950': '#112b40',
        },
        'secondary': {
          '50': '#f3f9ec',
          '100': '#e5f2d5',
          '200': '#cce7af',
          '300': '#abd581',
          '400': '#8cc259',
          '500': '#69a038',
          '600': '#54852b',
          '700': '#416625',
          '800': '#375222',
          '900': '#304621',
          '950': '#17260d',
        },
      },
      fontFamily: {
        custom: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

