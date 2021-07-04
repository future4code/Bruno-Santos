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

export const TelaUsuarioContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 85%;
  width: 95%;
  align-items: center;
  background-color: white;
  overflow: auto;
`;

export const CardUsuarioContainer = styled.div`
  display: flex;
  width: 95%;
  border-bottom: 1px solid;
  margin: 3px;
  height: 80px;
  align-items: center;

  :hover {
    background-color: #ccd9ff;
  }
`;

export const CardUsuarioImagem = styled.img`
  width: 70px;
  height: 70px;
  padding: 5px;
  margin-right: 10px;
  border-radius: 50%;
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
