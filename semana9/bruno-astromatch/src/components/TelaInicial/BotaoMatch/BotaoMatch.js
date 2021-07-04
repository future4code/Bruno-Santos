import React from "react";
import styled from "styled-components";
import coracao2 from "./imagens/coracao2.png";
import noMatch from "./imagens/noMatch.png";

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
  height: 70px;
  width: 80px;
  justify-content: center;
  align-items: center;
  background-color: #99b3ff;
  border: none;
  cursor: pointer;

  :hover {
    background-color: green;
  }
`;

const MatchNoMatchImagem = styled.img`
  height: 60px;
  width: 60px;
`;

const ButtonNoMatch = styled.button`
  height: 70px;
  width: 80px;
  justify-content: center;
  align-items: center;
  background-color: #99b3ff;
  border: none;
  cursor: pointer;

  :hover {
    background-color: red;
  }
`;

function BotaoMatch(props) {
  return (
    <BotaoMatchContainer>
      <ButtonNoMatch onClick={props.noMatch}>
        <MatchNoMatchImagem src={noMatch} />
      </ButtonNoMatch>
      <ButtonMatch onClick={props.match}>
        <MatchNoMatchImagem src={coracao2} />
      </ButtonMatch>
    </BotaoMatchContainer>
  );
}

export default BotaoMatch;
