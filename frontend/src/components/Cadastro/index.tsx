import React, { useEffect } from 'react'
import { Button, Container, ContainerInner, Image, Inputs } from './style'
import TextField from '@mui/material/TextField'
import { register } from 'api/requests'
import Router from 'next/router'

const Cadastro = () => {
  const [dados, setDados] = React.useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDados({
      ...dados,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const request = await register(dados)
    if (request.status === 201) {
      Router.push('/login')
    } else {
      alert('Erro ao cadastrar')
    }
  }

  return (
    <Container>
      <ContainerInner>
        <Image src="/img/Bookmark.svg" />
        <Inputs onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            label="Nome"
            variant="outlined"
            size="small"
            color="warning"
            value={dados.name}
            name="name"
            type={'text'}
            onChange={handleChange}
            required
          />

          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            size="small"
            color="warning"
            value={dados.email}
            name="email"
            type={'email'}
            onChange={handleChange}
            required
          />

          <TextField
            id="outlined-basic"
            label="password"
            variant="outlined"
            size="small"
            color="warning"
            value={dados.password}
            name="password"
            onChange={handleChange}
            required
            type={'password'}
          />

          <Button>Cadastrar</Button>
        </Inputs>
      </ContainerInner>
    </Container>
  )
}

export default Cadastro
