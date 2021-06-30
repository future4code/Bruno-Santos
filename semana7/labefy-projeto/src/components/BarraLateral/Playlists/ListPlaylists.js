import React from "react";
import styled from "styled-components";
import axios from "axios";
import { baseUrl, axiosConfig } from "../../../constants";
import Playlist from "./Playlist";

const PlaylistContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  width: 22vw;
  padding: 20px;
  height: 80vh;
`;

const InputPlaylist = styled.input`
  width: 15vw;
`;

const ButtonPlaylist = styled.button`
  width: 10vw;
  margin-bottom: 20px;
`;

const PlaylistCreationForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-sizing: border-box;
  &:hover {
    color: black;
    border: none;
    box-shadow: 0 0 20px black;
    background-color: #4c7226;
  }
`;

export default class ListPlaylists extends React.Component {
  state = {
    inputNameValue: "",
  };

  changeInputNameValue = (event) => {
    this.setState({ inputNameValue: event.target.value });
  };

  createPlaylist = (event) => {
    event.preventDefault();
    const body = {
      name: this.state.inputNameValue,
    };
    axios
      .post(baseUrl, body, axiosConfig)
      .then(() => {
        alert("Playlist cadastrada com sucesso!");
      })
      .catch(() => {
        alert("Erro! Tente novamente!");
      });
    this.setState({ inputNameValue: "" });
  };

  render() {
    return (
      <PlaylistContainer>
        <h2>PLAYLISTS</h2>
        <PlaylistCreationForm onSubmit={this.createPlaylist}>
          <InputPlaylist
            placeholder="Nome da Playlist"
            type="text"
            value={this.state.inputNameValue}
            onChange={this.changeInputNameValue}
          />
          <ButtonPlaylist>Criar playlist</ButtonPlaylist>
        </PlaylistCreationForm>
        <Row>
          <Playlist />
        </Row>
      </PlaylistContainer>
    );
  }
}
