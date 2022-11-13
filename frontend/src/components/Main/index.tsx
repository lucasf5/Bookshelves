import React from 'react'
import { useTheme } from 'next-themes'
import { Container, Content, Description, Logo, Title } from './styles'
import Footer from 'components/Footer'

const Main = () => {
  const { theme } = useTheme()
  return (
    <Container>
      <Content>
        <Logo src="/img/book.svg" />
        {theme === 'dark' ? (
          <Logo src="/img/logonamewhite.svg" />
        ) : (
          <Logo src="/img/logoname.svg" />
        )}
        <Title>is a better way to build products</Title>
        <Description>
          Meet the new standard for modern software development. Streamline
          issues, sprints, and product roadmaps.
        </Description>
      </Content>
      <Footer />
    </Container>
  )
}

export default Main
