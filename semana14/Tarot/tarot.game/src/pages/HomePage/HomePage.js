import React from "react";
import { HomePageContainer, PlayButton } from "./styled";
import { goToGamePage } from "../../router/Cordinator";
import { useHistory } from "react-router-dom";

function HomePage() {
    const history = useHistory();

    return (
        <HomePageContainer>
            <PlayButton onClick={() => goToGamePage(history)}>
                <h1>Entrar</h1>
            </PlayButton>
        </HomePageContainer>
    );
}

export default HomePage;
