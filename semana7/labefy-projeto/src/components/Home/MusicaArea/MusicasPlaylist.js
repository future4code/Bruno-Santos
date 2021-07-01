import React from "react";
import styled from "styled-components";

const LiContainer = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: century;
  font-size: 1.5rem;
  font-weight: bold;
  align-content: center;
  height: 40px;
  padding: 10px;
`;

const Acontainer = styled.a`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: space-between;
  color: black;
  transition: all 0.5s ease;
  align-content: center;
  &:hover {
    background-color: #4c7226;
    color: black;
    box-shadow: 0 0 10px black;
  }
`;

const Deletar = styled.div`
  height: 20px;
  width: 40px;
`;

const Nome = styled.div`
  height: 20px;
`;

export default class MusicasPlaylist extends React.Component {
  render() {
    return (
      <LiContainer>
        <Acontainer>
          <Nome>{this.props.trackName}</Nome>
          <Deletar
            onClick={() =>
              this.props.removeTrackFromPlaylist(this.props.trackId)
            }
          >
            X
          </Deletar>
        </Acontainer>
      </LiContainer>
    );
  }
}
