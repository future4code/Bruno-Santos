import React from "react";
import styled from "styled-components";
import axios from "axios";
import { baseUrl, axiosConfig } from "../../../constants";
import MusicasPlaylist from "./MusicasPlaylist";

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
    trackName: "",
    artist: "",
    url: "",
  };

  componentDidMount = () => {
    this.pegaTracks();
  };

  pegaTracks = () => {
    axios
      .get(`${baseUrl}/${this.props.playlistId}/tracks`, axiosConfig)
      .then((response) => {
        this.setState({ tracks: response.data.result.tracks });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  removeTrackFromPlaylist = (trackId) => {
    axios
      .delete(
        `${baseUrl}/${this.props.playlistId}/tracks/${trackId}`,
        axiosConfig
      )
      .then(() => {
        this.pegaTracks();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  changeInputValues = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addTrackToPlaylist = (event) => {
    event.preventDefault();
    const body = {
      name: this.state.trackName,
      artist: this.state.artist,
      url: this.state.url,
    };

    axios
      .post(`${baseUrl}/${this.props.playlistId}/tracks`, body, axiosConfig)
      .then(() => {
        this.pegaTracks();
      })
      .catch((err) => {
        console.log(err);
      });

    this.setState({
      trackName: "",
      artist: "",
      url: "",
    });
  };

  render() {
    console.log(this.props.playlistId);
    const tracks = this.state.tracks.map((track) => {
      return (
        <MusicasPlaylist
          key={track.id}
          trackName={track.name}
          artist={track.artist}
          url={track.url}
          trackId={track.id}
          removeTrackFromPlaylist={this.removeTrackFromPlaylist}
        />
      );
    });

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
          <BotaoAdicionarMusica onSubmit={this.addTrackToPlaylist}>
            Adicionar música
          </BotaoAdicionarMusica>
        </InputContainer>
        <UlContainer>{tracks}</UlContainer>
      </MusicaAreaStyle>
    );
  }
}
