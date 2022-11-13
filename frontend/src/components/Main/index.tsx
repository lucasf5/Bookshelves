import React, { useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Container, Content, Description, Logo, Title } from './styles'
import Footer from 'components/Footer'
import Image from 'next/image'

const Main = () => {
  const { theme, setTheme } = useTheme()
  useEffect(() => {
    if (theme === 'light') {
      setTheme('light')
    }
  }, [setTheme, theme])
  return (
    <Container>
      <Content>
        <Image src="/img/book.svg" width={100} height={100} />
        {theme === 'dark' ? (
          <Image src="/img/logonamewhite.svg" width={100} height={100} />
        ) : (
          <Image src="/img/logoname.svg" width={100} height={100} />
        )}
        <Title>is a better way to build products</Title>
        <Description>
          Meet the new standard for modern software development. Streamline
          issues, sprints, and product roadmaps.
        </Description>
      </Content>
    </Container>
  )
}

export default Main
