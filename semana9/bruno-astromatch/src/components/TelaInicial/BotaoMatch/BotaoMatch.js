import React from "react";
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

function BotaoMatch() {
  return (
    <BotaoMatchContainer>
      <ButtonMatch>X</ButtonMatch>
      <ButtonMatch>❤</ButtonMatch>
    </BotaoMatchContainer>
  );
}

export default BotaoMatch;
