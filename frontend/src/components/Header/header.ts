import { styled } from '@stitches/react'

export const Container = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem',
  backgroundColor: '$background',
  color: '$white',
  '@media (max-width: 768px)': {
    width: '100%',
    padding: '1rem 0'
  }
})
