import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  background-color: #e6ecff;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 10%;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  background-color: #ccd9ff;
`;

export const TelaInicialContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 85%;
  width: 95%;
  align-items: center;
  background-color: white;
`;

export const CardInicialContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 85%;
`;

export const CardInicialImagem = styled.img`
  width: 100%;
  height: 80%;
`;

export const CardInicialDescricao = styled.div`
  display: flex;
  flex-direction: column;
  height: 10%;
  width: 90%;
  justify-content: center;
  padding: 10px;
  margin-top: 5px;
`;
