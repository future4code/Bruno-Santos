import React from "react";
import styled from "styled-components";
import ListPlaylists from "./Playlists/ListPlaylists";
import Logo from "./Logo";

const BarraLateralContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #669933;
  align-items: center;
  width: 25vw;
  height: 100vh;
`;

export default class BarraLateral extends React.Component {
  render() {
    return (
      <BarraLateralContainer>
        <Logo />
        <ListPlaylists pegaPlaylistId={this.props.pegaPlaylistId} />
      </BarraLateralContainer>
    );
  }
}
