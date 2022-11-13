import { styled } from '@stitches/react'

export const ButtonToggleStyle = styled('button', {
  width: '50px',
  height: '25px',
  backgroundColor: '$text',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  borderRadius: '25px',
  padding: '10px',
  cursor: 'pointer',
  marginBottom: '20px',

  '&[data-ison="true"]': {
    justifyContent: 'flex-end'
  },

  '@media (max-width: 768px)': {
    display: 'none'
  }
})
