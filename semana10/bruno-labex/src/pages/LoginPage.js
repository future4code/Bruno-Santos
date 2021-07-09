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

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100vw;
`;

function LoginPage() {
  return (
    <LoginPageContainer>
      <LoginContainer>
        <button>Voltar</button>
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
    </LoginPageContainer>
  );
}

export default LoginPage;
