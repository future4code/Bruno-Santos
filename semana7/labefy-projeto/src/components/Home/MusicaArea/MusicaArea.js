import React from "react";
import styled from "styled-components";

const MusicaAreaStyle = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #7fa559;
  align-items: center;
  justify-content: center;
  height: 75vh;
  width: 75vw;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  width: 75vw;
`;

const UlContainer = styled.ul`
  margin: 0;
  padding: 10px;
  list-style: none;
  width: 100%;
  height: 60vh;
`;

const InputMusica = styled.input`
  text-transform: uppercase;
  width: 200px;
`;

const BotaoAdicionarMusica = styled.button`
  margin-bottom: 10px;
  text-transform: uppercase;
`;

export default class MusicaArea extends React.Component {
  state = {
    tracks: [],
    name: "",
    artist: "",
    url: "",
  };

  render() {
    return (
      <MusicaAreaStyle>
        <InputContainer>
          <label>Nome da música:</label>
          <InputMusica
            placeholder="Nome da música"
            name="trackname"
            value={this.state.name}
          />
          <label>Artista:</label>
          <InputMusica
            placeholder="Nome do Artista"
            name="artist"
            value={this.state.artist}
          />
          <label>URL da música:</label>
          <InputMusica placeholder="URL" name="url" value={this.state.url} />
          <BotaoAdicionarMusica>Adicionar música</BotaoAdicionarMusica>
        </InputContainer>
        <UlContainer></UlContainer>
      </MusicaAreaStyle>
    );
  }
}
