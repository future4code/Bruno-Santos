import React from "react";
import styled from "styled-components";
import ListPlaylists from "./Playlists/ListPlaylists";
import Logo from "./Logo";

const BarraLateralContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #669933;
  align-content: center;
  align-items: center;
  justify-items: center;
  justify-content: center;
  width: 25vw;
`;

export default class BarraLateral extends React.Component {
  render() {
    return (
      <BarraLateralContainer>
        <Logo />
        <h2>PLAYLISTS</h2>
        <button>
          <h3>CRIAR PLAYLIST</h3>
        </button>
        <ListPlaylists
          playlists={this.props.playlists}
          trocarPlaylist={this.props.trocarPlaylist}
        />
      </BarraLateralContainer>
    );
  }
}
