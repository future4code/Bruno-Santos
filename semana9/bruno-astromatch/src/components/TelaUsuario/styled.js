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
