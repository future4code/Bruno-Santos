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

export const BotaoPersonalizado = styled.button`
  display: flex;
  padding: 14px 20px;
  color: black;
  font-size: 15px;
  text-decoration: none;
  border: none;
  cursor: pointer;
  align-items: center;
  height: 30px;
  border-radius: 20px;
  font-weight: bold;
  background-color: #99b3ff;
  position: relative;
`;
