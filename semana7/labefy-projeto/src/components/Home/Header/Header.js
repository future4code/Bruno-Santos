import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  height: 25vh;
  width: 75vw;
  background-color: #7f9966;
  font-family: fantasy;
  font-size: 25px;
  text-transform: uppercase;
`;

export default class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <h1>PLAYLIST - {this.props.playlistId.name}</h1>
      </HeaderContainer>
    );
  }
}
