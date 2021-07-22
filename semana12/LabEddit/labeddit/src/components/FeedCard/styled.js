import styled from "styled-components";

export const FeedCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  h3 {
    color: #a64dff;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const BackColor = styled.div`
  background-color: #79ff4d;
`;

export const LikeImage = styled.img`
  height: 40px;
  width: 40px;
  color: #66ff33;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
