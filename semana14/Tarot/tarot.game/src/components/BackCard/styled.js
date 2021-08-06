import styled from "styled-components";

export const GameContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    width: 100%;
    height: 100%;
`;

export const SelectCardContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-self: center;
    align-items: center;
`;

export const BackCardContainer = styled.div`
    display: flex;
    border: 1px solid black;
    height: 260px;
    width: 140px;
    margin: 5px;
    background-color: black;
`;

export const ImageCardContainer = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
`;

export const RevealedCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    height: 260px;
    width: 160px;
    margin: 5px;
    background-color: white;
`;

export const ImageFrontCardContainer = styled.div`
    display: flex;
    height: 200px;
    width: 100%;
    border-bottom: 1px solid black;
`;

export const InfoCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 60px;
    width: 100%;
`;
