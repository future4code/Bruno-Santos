import styled from "styled-components";
import tarotGame from "../../assets/Images/tarotGame.png";

export const GamePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-image: url(${tarotGame});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
`;

export const GameContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    width: 75%;
    height: 60%;
    overflow: auto;
`;

export const PlayButton = styled.button`
    width: 300px;
    height: 60px;
    background-color: #7e52b6;
    cursor: pointer;
    border-radius: 300px;
    margin-bottom: 15px;
    :hover {
        background-color: red;
    }
`;
