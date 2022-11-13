import React from 'react'
import { useTheme } from 'next-themes'
import { Container } from './style'

const Footer = () => {
  const { theme } = useTheme()
  return <Container data-ison={theme} />
}

export default Footer
