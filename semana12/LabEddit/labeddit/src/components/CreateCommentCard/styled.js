import styled from "styled-components";

export const CreateCommentCardContainer = styled.div`
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
  overflow: auto;
`;

export const BackColor = styled.div`
  background-color: #79ff4d;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 180px;
  margin-left: 20px;
`;
