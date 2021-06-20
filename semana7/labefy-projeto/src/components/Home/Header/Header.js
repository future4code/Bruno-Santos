import React from "react";
import styled from "styled-components";
import Playlists from "../../BarraLateral/Playlists/Playlist";

const HeaderContainer = styled.div`
  height: 25vh;
  width: 75vw;
  background-color: #7f9966;
  font-family: fantasy;
  font-size: 25px;
  text-transform: uppercase;
`;

export default class Header extends React.Component {
  state = {
    musicasDaPlaylist: "",
  };

  render() {
    return (
      <HeaderContainer>
        <h1>PLAYLIST - {this.props.playlistSelecionada.nome}</h1>
      </HeaderContainer>
    );
  }
}
