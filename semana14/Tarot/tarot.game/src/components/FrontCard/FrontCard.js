import React from "react";
import {
  FrontCardContainer,
  ImageCardContainer,
  InfoCardContainer,
  GameContainer,
} from "./styled";

function FrontCard(props) {
  return (
    <FrontCardContainer key={props.name}>
      <InfoCardContainer>
        <span>{props.name}</span>
      </InfoCardContainer>
      <ImageCardContainer>
        <img src={props.image} />
      </ImageCardContainer>
      <InfoCardContainer>
        <span>Detalhe</span>
      </InfoCardContainer>
    </FrontCardContainer>
  );
}

export default FrontCard;
