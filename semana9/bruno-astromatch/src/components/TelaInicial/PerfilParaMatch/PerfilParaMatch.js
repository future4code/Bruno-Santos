import React from "react";
import { CardInicialContainer } from "../styled";
import { CardInicialImagem } from "../styled";
import { CardInicialDescricao } from "../styled";

function PerfilParaMatch(props) {
  return (
    <CardInicialContainer>
      <CardInicialImagem src={props.perfil.photo} />
      <CardInicialDescricao>
        <a>
          {props.perfil.name}, {props.perfil.age}
        </a>
        <a>{props.perfil.bio}</a>
      </CardInicialDescricao>
    </CardInicialContainer>
  );
}

export default PerfilParaMatch;
