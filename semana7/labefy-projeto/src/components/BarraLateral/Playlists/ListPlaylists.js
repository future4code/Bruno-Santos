import React from "react";
import styled from "styled-components";
import Playlist from "./Playlist";

const PlaylistContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 22vw;
  padding: 20px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  box-sizing: border-box;
  &:hover {
    background-position: left bottom;
    color: black;
    border: none;
    box-shadow: 0 0 20px black;
  }
`;

export default class ListPlaylists extends React.Component {
  render() {
    return (
      <PlaylistContainer>
        <Row>
          {this.props.playlists.map((playlist) => {
            return (
              <Playlist
                trocarPlaylist={this.props.trocarPlaylist}
                playlist={playlist}
              />
            );
          })}
        </Row>
      </PlaylistContainer>
    );
  }
}
