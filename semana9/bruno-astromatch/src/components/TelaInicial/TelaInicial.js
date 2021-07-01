import React from "react";
import styled from "styled-components";
import BotaoMatch from "./BotaoMatch/BotaoMatch";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  background-color: #e6ecff;
`;

const TelaInicialContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  background-color: white;
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

function TelaInicial(props) {
  return (
    <HomeContainer>
      <HeaderContainer>
        <button>Resetar</button>
        <h2>ASTROMATCH</h2>
        <button onClick={() => props.mudaPagina("telaUsuario")}>Usuário</button>
      </HeaderContainer>
      <TelaInicialContainer>
        <div>FOTO</div>
        <div>Nome, idade e descrição</div>
        <BotaoMatch />
      </TelaInicialContainer>
    </HomeContainer>
  );
}

export default TelaInicial;
