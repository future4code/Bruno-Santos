import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

const BotaoMatchContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 20%;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  background-color: #ccd9ff;
`;

const ButtonMatch = styled.button`
  height: 50px;
  width: 50px;
`;

function BotaoMatch(props) {
  return (
    <BotaoMatchContainer>
      <ButtonMatch onClick={props.noMatch}>X</ButtonMatch>
      <ButtonMatch onClick={props.match}>❤</ButtonMatch>
    </BotaoMatchContainer>
  );
}

export default BotaoMatch;
