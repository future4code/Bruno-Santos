import React from "react";
import styled from "styled-components";
import Home from "./components/Home/Home";
import BarraLateral from "./components/BarraLateral/BarraLateral";

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 25vw 72vw;
  height: 100vh;
  width: 100vw;
  text-align: center;
  justify-items: center;
`;

export default class App extends React.Component {
  state = {
    playlistId: "",
  };

  pegaPlaylistId = (playlistId) => {
    this.setState({ playlistId: playlistId });
  };

  render() {
    return (
      <AppContainer>
        <BarraLateral pegaPlaylistId={this.pegaPlaylistId} />
        <Home playlistId={this.state.playlistId} />
      </AppContainer>
    );
  }
}
