import React from "react";
import styled from "styled-components";
import Header from "./Header/Header";
import MusicaArea from "./MusicaArea/MusicaArea";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 75vw;
`;

export default class Home extends React.Component {
  state = {
    musicasDaPlaylist: "",
  };

  render() {
    return (
      <HomeContainer>
        <Header playlistId={this.props.playlistId} />
        <MusicaArea playlistId={this.props.playlistId} />
      </HomeContainer>
    );
  }
}
