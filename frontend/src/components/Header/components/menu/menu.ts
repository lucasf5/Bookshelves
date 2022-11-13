import { styled } from '@stitches/react'

export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: '50px',
  padding: '0 20px',
  borderBottom: '1px solid $text'
})

export const ContainerInner = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '10px',
  width: '100%',
  height: '100%'
})

export const Title = styled('h1', {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '$text'
})

export const ContainerRigth = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  marginBottom: '20px'
})

export const NavBar = styled('nav', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  ul: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '20px',

    li: {
      whiteSpace: 'nowrap',
      fontSize: '14px',
      lineHeight: 'var(--header-height)',
      height: 'var(--header-height)',
      color: '$text',
      fontWeight: '500',
      textAlign: 'center',
      transition: 'all 0.3s ease-in-out',

      '&:hover': {
        color: '$gray3',
        transition: 'all 0.3s ease-in-out'
      },

      '&:last-child': {
        border: '1px solid $text',
        padding: '10px 20px',
        borderRadius: '10px',
        cursor: 'pointer',
        alignSelf: 'flex-end',
        '&:hover': {
          backgroundColor: '$text',
          color: '$background'
        }
      }
    }
  }
})
