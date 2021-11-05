import React, { useContext, useEffect, useState } from "react";
import FrontCard from "../../components/FrontCard/FrontCard";
import { GamePageContainer, GameContainer, PlayButton } from "./styled";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import BackCard from "../../components/BackCard/BackCard";

function GamePage() {
    const { states, setters, requests, URL_BASE } =
        useContext(GlobalStateContext);
    const [cardSide, setCardSide] = useState(false);

    useEffect(() => {
        requests.getInfo();
    }, []);

    const mixCards = () => {
        setCardSide(!cardSide);
    };

    console.log("CADE", states.tarot);

    const frontCards =
        states.tarot &&
        states.tarot.cards.map((card) => {
            return <FrontCard name={card.name} image={URL_BASE + card.image} />;
        });

    return (
        <GamePageContainer>
            <PlayButton onClick={mixCards}>
                {cardSide ? <h2>REINICIAR</h2> : <h2>JOGAR</h2>}
            </PlayButton>
            <GameContainer>
                {cardSide ? <BackCard /> : frontCards}
            </GameContainer>
        </GamePageContainer>
    );
}

export default GamePage;
