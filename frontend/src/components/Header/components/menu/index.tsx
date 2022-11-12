import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ButtonToggle from '../buttonToggle'
import {
  Container,
  NavBar,
  ContainerInner,
  Title,
  ContainerRigth
} from './menu'

const Menu = () => {
  return (
    <Container>
      <ContainerRigth>
        <ContainerInner>
          <Link href="/">
            <Image
              style={{ cursor: 'pointer' }}
              src="/img/linear-dark-logo.svg"
              alt="logo"
              width={20}
              height={20}
            />
          </Link>
          <Title>Librairie</Title>
        </ContainerInner>
        <NavBar>
          <ul>
            <li>
              <a href="#">Acervo</a>
            </li>
            <li>
              <a href="#">Registrar</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
          </ul>
        </NavBar>
      </ContainerRigth>
      <ButtonToggle />
    </Container>
  )
}

export default Menu
