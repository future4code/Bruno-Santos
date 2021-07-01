import React from "react";
import styled from "styled-components";
import TelaInicial from "./components/TelaInicial/TelaInicial";
import TelaUsuario from "./components/TelaUsuario/TelaUsuario";
import { useState } from "react";

const GlobalContainer = styled.div`
  display: flex;
  height: 98vh;
  width: 99vw;
  justify-content: center;
  align-items: center;
  background-color: #99b3ff;
`;

const TelaCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  width: 35vw;
  justify-content: center;
  align-items: center;
  border: solid;
  background-color: white;
`;

function App() {
  const [paginaAtual, setPaginaAtual] = useState("telaInicial");

  const mudaPagina = (paginaAtual) => {
    setPaginaAtual(paginaAtual);
  };

  const renderPaginaAtual = () => {
    if (paginaAtual === "telaInicial") {
      return <TelaInicial mudaPagina={mudaPagina} />;
    } else if (paginaAtual === "telaUsuario") {
      return <TelaUsuario mudaPagina={mudaPagina} />;
    }
  };

  return (
    <GlobalContainer>
      <TelaCardContainer>{renderPaginaAtual()}</TelaCardContainer>
    </GlobalContainer>
  );
}

export default App;
