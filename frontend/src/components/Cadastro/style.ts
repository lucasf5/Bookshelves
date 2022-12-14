import { styled } from '@stitches/react'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '5rem',
  height: 'calc(100vh - 86px)',
  margin: '0 1rem',
  backgroundImage: 'url(/img/blobs.svg)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  fontFamily: 'Inter',
  '@media (max-width: 768px)': {
    margin: '0'
  }
})

export const ContainerInner = styled('div', {
  width: '50%',
  display: 'flex',
  justifyContent: 'center',
  '@media (max-width: 768px)': {
    width: '100%',
    height: '50%'
  }
})

export const Image = styled('img', {
  width: '200px',
  height: 'auto',
  borderBottomLeftRadius: '1rem',
  borderTopLeftRadius: '1rem',
  '@media (max-width: 768px)': {
    display: 'none'
  }
})

export const Inputs = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '1rem',
  maxWidth: '400px',
  width: '100%',
  backgroundColor: '#fff',
  padding: '1rem',
  borderBottomRightRadius: '1rem',
  borderTopRightRadius: '1rem',
  '@media (max-width: 768px)': {
    borderRadius: '1rem'
  },
  input: {
    boxShadow: 'inset 2px 2px 2px white, inset -2px -2px 2px #cbced1'
    // backgroundColor: '#000'
  }
})

export const Button = styled('button', {
  border: 'none',
  backgroundColor: '#000',
  color: '#fff',
  padding: '0.5rem 1rem',
  borderRadius: '0.5rem',
  cursor: 'pointer',
  margin: '0 auto',
  width: '95%',
  transition: 'all 0.2s ease-in-out',
  fontFamily: 'Inter',
  fontSize: '1.1rem',
  '&:hover': {
    backgroundColor: '#FFC700',
    color: '$text',
    transform: 'scale(1.05)',
    transition: 'all 0.2s ease-in-out'
  }
})
