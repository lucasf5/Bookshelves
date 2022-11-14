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
              src="/img/book.svg"
              alt="logo"
              width={20}
              height={20}
            />
          </Link>
          <Title>Bookshelves</Title>
        </ContainerInner>
        <NavBar>
          <ul>
            <li>
              <Link href="#">Acervo</Link>
            </li>
            <li>
              <Link href="/register">Registrar</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
          </ul>
        </NavBar>
      </ContainerRigth>
      <ButtonToggle />
    </Container>
  )
}

export default Menu
