import React from "react";
import styled, { keyframes } from "styled-components";
import { Button } from "../../components/button";
import { Link } from "react-router-dom";
import Character from "/images/character.svg";

const DestinationDetail2 = () => {
  return (
    <Container>
      <div />
      <KillometerText>514km</KillometerText>
      <DescriptionWrapper>
        <CharacterImage2 src={Character} alt="character2" />
        <Text>이번 여정동안 함께할 거리에요</Text>
      </DescriptionWrapper>
      <Link
        to="/destination/3"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
          padding: "0 16px 32px 16px",
          textDecoration: "none",
        }}
      >
        <Button>확인했어요</Button>
      </Link>
    </Container>
  );
};

export default DestinationDetail2;

const slideIn = keyframes`
  from {
      opacity: 0;
    }
    
    to {
        opacity: 1;
    }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
`;

const CharacterImage2 = styled.img`
  width: 60px;
  height: 60px;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 60px;
  animation: ${slideIn} 2s 0s ease-in;
`;

const Text = styled.div`
  text-align: center;
  ${({ theme }) => theme.font.title};
  white-space: pre-wrap;
`;

const KillometerText = styled.span`
  ${({ theme }) => theme.font.display};
  text-align: center;
  margin-top: 100px;
`;
