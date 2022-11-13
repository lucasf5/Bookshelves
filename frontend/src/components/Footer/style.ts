import { styled } from '@stitches/react'

export const Container = styled('footer', {
  width: '100%',
  height: '34vh',
  overflow: 'hidden',
  display: 'flex',
  backgroundImage: 'url(/img/waveswhite.svg)',
  backgroundRepeat: 'repeat-x',
  backgroundPosition: 'top',
  backgroundSize: 'cover',
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  color: '$text',
  fontFamily: 'Inter, sans-serif',
  '&[data-ison="light"]': {
    backgroundImage: 'url(/img/waves.svg)'
  },
  '&[data-ison="dark"]': {
    backgroundImage: 'url(/img/waveswhite.svg)'
  }
})
