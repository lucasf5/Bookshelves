import Footer from 'components/Footer'
import Header from 'components/Header'
import Main from 'components/Main'
import { HomeContainer } from 'styles/pages/home'
import { styled } from 'styles/stitches.config'

export default function IndexPage() {
  return (
    <HomeContainer>
      <Header />
      <Main />
      <Footer />
    </HomeContainer>
  )
}
