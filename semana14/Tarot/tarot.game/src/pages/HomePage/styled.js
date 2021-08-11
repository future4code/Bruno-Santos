import styled from "styled-components";
import tarotHome from "../../assets/Images/tarotHome.png";

export const HomePageContainer = styled.div`
    display: flex;
    background-image: url(${tarotHome});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
`;

export const PlayButton = styled.button`
    width: 250px;
    height: 80px;
    background-color: #7e52b6;
    cursor: pointer;
    border-radius: 100px;
    :hover {
        background-color: red;
    }
`;
