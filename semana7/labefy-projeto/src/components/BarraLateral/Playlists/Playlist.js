import React from "react";
import styled from "styled-components";
import axios from "axios";
import { baseUrl, axiosConfig } from "../../../constants";
import PlaylistCard from "./PlaylistCard";

const PlaylistContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  width: 20vw;
  height: 40vh;
  margin: 5px;
  padding: 5px;
`;

export default class Playlists extends React.Component {
  state = {
    playlists: [],
  };

  componentDidMount = () => {
    this.pegaPlaylist();
  };

  pegaPlaylist = () => {
    axios
      .get(baseUrl, axiosConfig)
      .then((response) => {
        this.setState({ playlists: response.data.result.list });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  deletePlaylist = (playlistId) => {
    axios
      .delete(`${baseUrl}/${playlistId}`, axiosConfig)
      .then((res) => {
        this.pegaPlaylist();
      })
      .catch((err) => {
        alert("Erro! Tente novamente!");
      });
  };

  render() {
    const playlists = this.state.playlists.map((playlist) => {
      return (
        <PlaylistCard
          key={playlist.id}
          name={playlist.name}
          playlistId={playlist.id}
          deletePlaylist={this.deletePlaylist}
          pegaPlaylistId={this.props.pegaPlaylistId}
        />
      );
    });

    return <PlaylistContainer>{playlists}</PlaylistContainer>;
  }
}
