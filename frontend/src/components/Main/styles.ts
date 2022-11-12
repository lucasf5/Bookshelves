import { styled } from '@stitches/react'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$gray1',
  color: '$white'
})

export const Content = styled('article', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  padding: '0 1rem',
  maxWidth: '800px',
  margin: '0 auto'
})
