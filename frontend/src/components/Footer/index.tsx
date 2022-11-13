import React, { useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Container } from './style'

const Footer = () => {
  const { theme } = useTheme()
  useEffect(() => {
    if (theme === 'system') {
      document.documentElement.classList.add('light')
    }
  }, [])
  return <Container data-ison={theme} />
}

export default Footer
