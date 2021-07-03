import React from "react";
import { CardUsuarioContainer } from "../styled";
import { CardUsuarioImagem } from "../styled";

function PerfilMatch(props) {
  return (
    <CardUsuarioContainer>
      <CardUsuarioImagem src={props.perfil.photo} />
      <p>{props.perfil.name}</p>
    </CardUsuarioContainer>
  );
}

export default PerfilMatch;
