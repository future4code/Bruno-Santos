import React, { useEffect, useState } from "react";
import { HomeContainer } from "./styled";
import { HeaderContainer } from "./styled";
import { TelaInicialContainer } from "./styled";
import PerfilParaMatch from "./PerfilParaMatch/PerfilParaMatch";
import BotaoMatch from "./BotaoMatch/BotaoMatch";
import axios from "axios";

function TelaInicial(props) {
  const [perfil, setPerfil] = useState({ undefined });

  const pegaPerfil = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/bruno/person"
      )
      .then((res) => {
        setPerfil(res.data.profile);
      });
  };

  useEffect(() => {
    pegaPerfil();
  }, []);

  const match = () => {
    let body = {
      choice: true,
      id: perfil.id,
    };

    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/bruno/choose-person",
        body
      )
      .then((res) => {
        console.log(res);
        pegaPerfil();
      });
  };

  const noMatch = () => {
    let body = {
      choice: false,
      id: perfil.id,
    };

    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/bruno/choose-person",
        body
      )
      .then((res) => {
        console.log(res);
        pegaPerfil();
      });
  };

  return (
    <HomeContainer>
      <HeaderContainer>
        <button onClick={props.botaoResetar}>Resetar</button>
        <h2>ASTROMATCH</h2>
        <button onClick={() => props.mudaPagina("telaUsuario")}>Usuário</button>
      </HeaderContainer>
      <TelaInicialContainer>
        {perfil ? (
          <>
            <PerfilParaMatch perfil={perfil} />
            <BotaoMatch match={match} noMatch={noMatch} />
          </>
        ) : (
          <p>Carregando...</p>
        )}
      </TelaInicialContainer>
    </HomeContainer>
  );
}

export default TelaInicial;
