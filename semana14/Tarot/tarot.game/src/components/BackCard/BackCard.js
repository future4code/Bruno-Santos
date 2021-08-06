import React, { useContext, useState } from "react";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import {
    BackCardContainer,
    ImageCardContainer,
    RevealedCardContainer,
    ImageFrontCardContainer,
    InfoCardContainer,
    GameContainer,
    SelectCardContainer,
} from "./styled";

function BackCard() {
    const { states, URL_BACK, URL_BASE } = useContext(GlobalStateContext);

    const [cardName, setCardName] = useState("");
    const [cardImage, setCardImage] = useState("");
    const [cardSide, setCardSide] = useState(false);

    const getRandomCard = () => {
        const x = Math.floor(Math.random() * 10);
        setCardName(states.tarot.cards[x].name);
        setCardImage(states.tarot.cards[x].image);
        setCardSide(!cardSide);
    };

    return (
        <GameContainer>
            {cardSide ? (
                <SelectCardContainer>
                    <RevealedCardContainer onClick={getRandomCard}>
                        <ImageFrontCardContainer>
                            <img src={URL_BASE + cardImage} alt={cardImage} />
                        </ImageFrontCardContainer>
                        <InfoCardContainer>
                            <span>{cardName}</span>
                            <span>Detalhe</span>
                        </InfoCardContainer>
                    </RevealedCardContainer>
                </SelectCardContainer>
            ) : (
                states.tarot &&
                states.tarot.cards &&
                states.tarot.cards.map((card) => {
                    return (
                        <BackCardContainer
                            onClick={getRandomCard}
                            key={card.name}
                        >
                            <ImageCardContainer>
                                <img src={URL_BACK} />
                            </ImageCardContainer>
                        </BackCardContainer>
                    );
                })
            )}
        </GameContainer>
    );
}

export default BackCard;
