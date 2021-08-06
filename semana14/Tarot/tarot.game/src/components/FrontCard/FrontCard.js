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
            <ImageCardContainer>
                <img src={props.image} />
            </ImageCardContainer>
            <InfoCardContainer>
                <span>{props.name}</span>
                <span>Detalhe</span>
            </InfoCardContainer>
        </FrontCardContainer>
    );
}

export default FrontCard;
