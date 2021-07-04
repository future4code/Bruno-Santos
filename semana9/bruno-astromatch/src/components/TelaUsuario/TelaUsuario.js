import React, { useEffect, useState } from "react";
import { HomeContainer } from "./styled";
import { HeaderContainer } from "./styled";
import { TelaUsuarioContainer } from "./styled";
import { BotaoPersonalizado } from "./styled";
import PerfilMatch from "./PerfilMatch/PerfilMatch";
import axios from "axios";

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
        <BotaoPersonalizado onClick={props.botaoResetar}>
          Resetar
        </BotaoPersonalizado>
        <h2>ASTROMATCH</h2>
        <BotaoPersonalizado onClick={() => props.mudaPagina("telaInicial")}>
          Voltar
        </BotaoPersonalizado>
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
