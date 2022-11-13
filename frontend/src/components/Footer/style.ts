import { styled } from '@stitches/react'

export const Container = styled('footer', {
  width: '100%',
  height: '34vh',
  overflow: 'hidden',
  display: 'flex',
  backgroundImage: 'url(/img/waves.svg)',
  backgroundRepeat: 'repeat-x',
  backgroundPosition: 'top',
  backgroundSize: 'cover',
  color: '$text',
  fontFamily: 'Inter, sans-serif',
  '&[data-ison="dark"]': {
    backgroundImage: 'url(/img/waveswhite.svg)'
  }
})
