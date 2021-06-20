import React from "react";
import styled from "styled-components";

const LogoStyle = styled.div`
  display: flex;
  font-size: 20px;
`;

export default class Logo extends React.Component {
  render() {
    return (
      <LogoStyle>
        <h1>LABEFY</h1>
      </LogoStyle>
    );
  }
}
