import React from "react";
import styled from "styled-components";
import Home from "./components/Home/Home";
import BarraLateral from "./components/BarraLateral/BarraLateral";

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 25vw 72vw;
  height: 98vh;
  width: 98vw;
  text-align: center;
  justify-items: center;
`;

export default class App extends React.Component {
  state = {
    playlists: [
      {
        id: 1,
        nome: "Rock",
        musicas: [
          {
            id: 1,
            titulo: "Highway to hell",
            artista: "AC/DC",
          },
          {
            id: 2,
            titulo: "Jump",
            artista: "Van Halen",
          },
        ],
      },
      {
        id: 2,
        nome: "Músicas novas",
        musicas: [
          {
            id: 3,
            titulo: "Save your tears",
            artista: "The weeknd",
          },
        ],
      },
    ],
    idPlaylistSelecionada: 2,
  };

  trocarPlaylist = (id) => {
    this.setState({ idPlaylistSelecionada: id });
  };

  render() {
    const playlistSelecionada = this.state.playlists.find((playlist) => {
      return playlist.id === this.state.idPlaylistSelecionada;
    });

    return (
      <AppContainer>
        <BarraLateral
          playlists={this.state.playlists}
          trocarPlaylist={this.trocarPlaylist}
        />
        <Home playlistSelecionada={playlistSelecionada} />
      </AppContainer>
    );
  }
}
