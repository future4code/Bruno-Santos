import React, { useEffect, useState } from "react";
import { HomeContainer } from "./styled";
import { HeaderContainer } from "./styled";
import { TelaUsuarioContainer } from "./styled";
import PerfilMatch from "./PerfilMatch/PerfilMatch";
import axios from "axios";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

function TelaUsuario(props) {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/bruno/matches"
      )
      .then((res) => {
        setMatches(res.data.matches);
      });
  }, []);

  return (
    <HomeContainer>
      <HeaderContainer>
        <button onClick={props.botaoResetar}>Resetar</button>
        <h2>ASTROMATCH</h2>
        <button onClick={() => props.mudaPagina("telaInicial")}>Voltar</button>
      </HeaderContainer>
      <TelaUsuarioContainer>
        {matches.map((perfil) => {
          return <PerfilMatch perfil={perfil} />;
        })}
      </TelaUsuarioContainer>
    </HomeContainer>
  );
}

export default TelaUsuario;
