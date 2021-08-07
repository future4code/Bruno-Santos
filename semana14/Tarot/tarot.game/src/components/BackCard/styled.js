import styled from "styled-components";

export const GameContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 75vw;
`;

export const SelectCardContainer = styled.div`
  display: flex;
  width: 75vw;
  justify-content: center;
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
  border: 1px solid black;
  height: 400px;
  width: 250px;
  margin: 5px;
  background-color: white;
`;

export const ImageFrontCardContainer = styled.div`
  display: flex;
  height: 350px;
  width: 250px;
  border-bottom: 1px solid black;
  img {
    height: 350px;
    width: 250px;
  }
`;

export const InfoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 50px;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-family: fantasy;
`;
