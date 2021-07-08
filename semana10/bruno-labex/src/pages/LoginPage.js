import React from "react";
import styled from "styled-components";

const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
`;

const HeaderContainer = styled.div`
  display: flex;
  height: 10vh;
  width: 100vw;
  justify-content: space-around;
  align-items: center;
  background-color: silver;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100vw;
`;

const FooterContainer = styled.div`
  display: flex;
  height: 10vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: silver;
`;

function LoginPage() {
  return (
    <LoginPageContainer>
      <HeaderContainer>
        <button>Voltar</button>
        <h1>LabeX</h1>
      </HeaderContainer>
      <LoginContainer>
        <h2>Faça seu login!</h2>
        <div>
          Login:
          <input />
        </div>
        <div>
          Senha:
          <input />
        </div>
      </LoginContainer>
      <FooterContainer>
        <h1>FOOTER</h1>
      </FooterContainer>
    </LoginPageContainer>
  );
}

export default LoginPage;
