import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { ButtonToggleStyle } from './style'

const ButtonToggle = () => {
  const [color, setColor] = useState('light')
  const [isOn, setIsOn] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    if (theme === 'dark') {
      setColor('dark')
    } else {
      setColor('light')
    }
  }, [])

  const toggleTheme = () => {
    setColor(color === 'light' ? 'dark' : 'light')
    setIsOn(!isOn)
    setTheme(color)
  }
  return (
    <ButtonToggleStyle onClick={toggleTheme} data-ison={isOn}>
      <motion.div
        style={{
          width: '15px',
          height: '15px',
          backgroundColor: '#FFC700',
          borderRadius: '40px'
        }}
        layout
        transition={spring}
      />
    </ButtonToggleStyle>
  )
}

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30
}

export default ButtonToggle
