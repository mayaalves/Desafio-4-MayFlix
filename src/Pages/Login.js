import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 92vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BoxLogin = styled.div`
  backdrop-filter: blur(21px) saturate(179%);
  -webkit-backdrop-filter: blur(21px) saturate(179%);
  background-color: rgba(74, 78, 78, 0.45);
  border-radius: 25px 25px 25px 25px;
  height: 60vh;
  width: 55vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Img = styled.img`
  width: 8vh;
  height: 8vh;
  margin-bottom: 10vh;
  margin-top: -22vh;
`;
const Input = styled.input`
  height: 5vh;
  width: 40vh;
  margin: 1vh;
  border-radius: 25px;
  border: solid 4px #998da4;
  background-color: #353340;
  color: #f2f2f2;
`;
const Button = styled.button`
  height: 8vh;
  width: 16vh;
  margin: 4vh;
  cursor: pointer;
  border-radius: 50px;
  border: solid 4px #998da4;
  background-color: #353340;
  color: #f2f2f2;
  transition: transform 1.25s;
  &:hover {
    transform: scale(1.1);
    -webkit-filter: drop-shadow(8px 8px 5px rgba(153, 141, 164, 0.5));
    filter: drop-shadow(8px 8px 5px rgba(153, 141, 164, 0.5));
  }
`;

export default class Login extends React.Component {
  render() {
    return (
      <Container>
        <BoxLogin>
          <Img
            src="https://img.icons8.com/ios-filled/2x/ffffff/gender-neutral-user.png"
            alt="Usuario"
          />
          <Input type="text" name="Usuario" placeholder="  Usuario" />
          <Input type="password" name="Senha" placeholder="  Senha" />
          <Button>Entrar</Button>
        </BoxLogin>
      </Container>
    );
  }
}
