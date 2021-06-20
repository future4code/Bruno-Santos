import React from "react";
import styled from "styled-components";
import MusicasPlaylist from "./MusicasPlaylist";

const MusicaAreaStyle = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #7fa559;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const UlContainer = styled.ul`
  margin: 0;
  padding: 10px;
  list-style: none;
  width: 100%;
`;

const BotaoAdicionarMusica = styled.button`
  margin-bottom: 10px;
  text-transform: uppercase;
`;

export default class MusicaArea extends React.Component {
  state = {
    musicasDaPlaylist: "",
  };

  render() {
    return (
      <MusicaAreaStyle>
        <BotaoAdicionarMusica>Adicionar música</BotaoAdicionarMusica>
        <UlContainer>
          {this.props.playlistSelecionada.musicas.map((musica) => {
            return <MusicasPlaylist nome={musica.titulo} />;
          })}
        </UlContainer>
      </MusicaAreaStyle>
    );
  }
}
