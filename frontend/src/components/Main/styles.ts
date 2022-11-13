import { styled, keyframes } from '@stitches/react'
import { bounceInUp } from 'react-animations'

const pulseAnimation = keyframes(bounceInUp)

export const Container = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$background',
  color: '$text',
  margin: '0 1rem 1rem 1rem',
  fontFamily: 'Inter, sans-serif',
  animation: `1s ${pulseAnimation}`
})

export const Content = styled('article', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  padding: '0 1rem',
  maxWidth: '800px',
  margin: '0 auto',
  width: '100%',
  '@media (max-width: 841px)': {
    width: '100%'
  }
})

export const Title = styled('h1', {
  fontSize: '5rem',
  fontWeight: 500,
  lineHeight: '5rem',
  breakWord: 'break-word',
  textAlign: 'center',
  color: '$gray3',
  marginBottom: '24px',

  '@media (max-width: 841px)': {
    fontSize: '2rem',
    lineHeight: '2rem'
  }
})

export const Description = styled('p', {
  textAlign: 'center',
  margin: '0px 0px 48px',
  fontSize: '1.3rem',
  lineHeight: '1.5rem',
  fontWeight: '400',
  color: '$gray3',
  '@media (max-width: 841px)': {
    fontSize: '1rem',
    lineHeight: '1rem'
  }
})

export const Logo = styled('img', {
  height: '8rem',
  pointerEvents: 'none'
})
