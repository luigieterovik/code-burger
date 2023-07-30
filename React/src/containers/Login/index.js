import React from 'react'

import LoginImg from '../../assets/login-image.png'
import Logo from '../../assets/logo.png'
import {
  Container,
  LoginImage,
  ContainerItems,
  Label,
  Input,
  Button,
  SignInLink
} from './styles'

function Login() {
  return (
    <Container>
      <LoginImage src={LoginImg} alt="logo-image" />
      <ContainerItems>
        <img src={Logo} alt="logo" />
        <h1>Login</h1>

        <Label>Email</Label>
        <Input />
        <Label>Senha</Label>
        <Input />

        <Button>Sign In</Button>
        <SignInLink>
          Não possui conta? <a>Sign Up</a>
        </SignInLink>
      </ContainerItems>
    </Container>
  )
}

export default Login
