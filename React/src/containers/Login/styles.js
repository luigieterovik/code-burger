import styled from 'styled-components'

import Background from '../../assets/background.png'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${Background}');
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginImage = styled.img`
  height: 80%;
`

export const ContainerItems = styled.div`
  border-radius: 0 10px 10px 0;
  background: #373737;
  height: 80%;
  padding: 25px 75px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  h1 {
    color: #fff;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: center;
    margin-top: 40px;
  }

  img {
    width: 260px;
    height: 94px;
    margin: 0 auto;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`

export const Label = styled.p`
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 25px 0 3px;
`

export const Input = styled.input`
  border-radius: 5px;
  background: #fff;
  box-shadow: 3px 3px 10px 0px rgba(74, 144, 226, 0.19);
  border: ${props => (props.error ? '2px solid #CC1717' : 'none')};
  height: 40px;
  width: 390px;
  padding-left: 10px;
`

export const Button = styled.button`
  width: 183px;
  height: 36px;
  color: #eee;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background: #9758a6;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  margin: 45px 0 15px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`

export const SignInLink = styled.p`
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  a {
    text-decoration: underline;
    cursor: pointer;
  }
`

export const Error = styled.p`
  color: #cc1717;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
