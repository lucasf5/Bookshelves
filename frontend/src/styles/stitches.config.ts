import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  css
} = createStitches({})

export const lightTheme = createTheme({
  colors: {
    title: '#E1E1E6',
    text: '#fff',
    background: '#000',

    gray1: '#121214',
    gray2: '#202024 ',
    gray3: '#D4D4D4',

    white: '#FFF',
    white100: '#F5F5F5',
    white200: '#E5E5E5',
    white300: '#D4D4D4',
    black: '#000',

    purple100: '#7465d4',
    purple200: '#5e4fa2',
    purple300: '#4a3c78',
    purple400: '#3a2d5a',
    purple500: '#2a1e3c',

    green100: '#00B37E',
    green200: '#1ea483',
    green300: '#2f9a8a',
    green400: '#3f908f',
    green500: '#4f8694',
    green600: '#00875F'
  }
})

// define the dark theme using the de-constructed function
export const darkTheme = createTheme({
  colors: {
    title: '#E1E1E6',
    text: '#000',
    background: '#FFC700',

    gray1: '#121214',
    gray2: '#202024 ',
    gray3: '#202024',

    white: '#FFF',
    white100: '#F5F5F5',
    white200: '#E5E5E5',
    white300: '#D4D4D4',
    black: '#000',

    purple100: '#7465d4',
    purple200: '#5e4fa2',
    purple300: '#4a3c78',
    purple400: '#3a2d5a',
    purple500: '#2a1e3c',

    green100: '#00B37E',
    green200: '#1ea483',
    green300: '#2f9a8a',
    green400: '#3f908f',
    green500: '#4f8694',
    green600: '#00875F'
  }
})

const GlobalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },

  'body, input, textarea, select, button': {
    font: '400 1rem roboto, sans-serif'
  },

  body: {
    background: '$background',
    color: '$text'
  },

  'h1,h2,h3,h4,h5,h6': {
    fontWeight: 600
  },

  button: {
    border: 'none',
    cursor: 'pointer'
  },

  'button[type=submit]': {
    opacity: 0.5
  },
  a: {
    color: 'inherit',
    textDecoration: 'none'
  },
  '[disabled]': {
    opacity: 0.6,
    cursor: 'not-allowed'
  },
  li: {
    listStyle: 'none'
  }
})

//we can declare the styles here or in pages/_app.tsx
GlobalStyles()
