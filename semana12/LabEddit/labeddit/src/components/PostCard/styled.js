import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  margin: 20px;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #a64dff;

  h3 {
    color: #33cc00;
    font-weight: bold;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 70px;
`;

export const BackColor = styled.div`
  background-color: #79ff4d;
  cursor: pointer;
`;

export const LikeImage = styled.img`
  height: 40px;
  width: 40px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 180px;
  margin-left: 20px;
`;
