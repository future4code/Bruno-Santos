import React from "react";
import styled from "styled-components";

const PlaylistContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  width: 20vw;
  height: 30px;
  margin: 5px;
  padding: 5px;
`;

const Deletar = styled.div`
  font-size: 25px;
`;

const Nome = styled.div`
  font-size: 25px;
`;

export default class Playlists extends React.Component {
  render() {
    return (
      <PlaylistContainer>
        <button
          onClick={() => this.props.trocarPlaylist(this.props.playlist.id)}
        >
          <Nome>{this.props.playlist.nome}</Nome>
        </button>
        <Deletar>X</Deletar>
      </PlaylistContainer>
    );
  }
}
