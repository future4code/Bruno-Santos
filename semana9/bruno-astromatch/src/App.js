import React from "react";
import styled from "styled-components";
import TelaInicial from "./components/TelaInicial/TelaInicial";
import TelaUsuario from "./components/TelaUsuario/TelaUsuario";
import { useState } from "react";
import axios from "axios";

const GlobalContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: #99b3ff;
  border: 0;
  margin: 0;
`;

const TelaCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
  width: 400px;
  justify-content: center;
  align-items: center;
  border: solid black 3px;
  border-radius: 3px;
  background-color: white;
`;

function App() {
  const [paginaAtual, setPaginaAtual] = useState("telaInicial");

  const botaoResetar = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/bruno/clear"
      )
      .then((res) => {
        console.log(res);
      });
  };

  const mudaPagina = (paginaAtual) => {
    setPaginaAtual(paginaAtual);
  };

  const renderPaginaAtual = () => {
    if (paginaAtual === "telaInicial") {
      return (
        <TelaInicial mudaPagina={mudaPagina} botaoResetar={botaoResetar} />
      );
    } else if (paginaAtual === "telaUsuario") {
      return (
        <TelaUsuario mudaPagina={mudaPagina} botaoResetar={botaoResetar} />
      );
    }
  };

  return (
    <GlobalContainer>
      <TelaCardContainer>{renderPaginaAtual()}</TelaCardContainer>
    </GlobalContainer>
  );
}

export default App;
