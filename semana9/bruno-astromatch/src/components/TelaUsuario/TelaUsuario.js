import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  background-color: #e6ecff;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 15%;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  background-color: #ccd9ff;
`;

const TelaUsuarioContainer = styled.div`
  display: flex;
  height: 80%;
  width: 90%;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  border: solid;
`;

function TelaUsuario(props) {
  return (
    <HomeContainer>
      <HeaderContainer>
        <button>Resetar</button>
        <h2>ASTROMATCH</h2>
        <button onClick={() => props.mudaPagina("telaInicial")}>Voltar</button>
      </HeaderContainer>
      <TelaUsuarioContainer>
        <div>FOTO</div>
        <div>NOME</div>
      </TelaUsuarioContainer>
    </HomeContainer>
  );
}

export default TelaUsuario;
