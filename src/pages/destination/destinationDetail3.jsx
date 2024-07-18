import React from "react";
import Character from "/images/character.svg";
import styled, { keyframes } from "styled-components";
import { Button } from "../../components/button";
import { Link } from "react-router-dom";

const DestinationDetail3 = () => {
  return (
    <Container>
      <div />
      <Wrapper>
        <CharacterImage src={Character} alt="character" />
        <Text>그럼, 행운을 빌어요!</Text>
      </Wrapper>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
          padding: "0 16px 32px 16px",
          textDecoration: "none",
        }}
      >
        <Button onClick={() => window.detail.postMessage("success")}>여정 시작하기</Button>
      </div>
    </Container>
  );
};

export default DestinationDetail3;

const slideIn = keyframes`
  from {
      opacity: 0;
      margin-top: 60px;
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

const CharacterImage = styled.img`
  width: 120px;
  height: 120px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${slideIn} 2s 0s ease-in;
`;

const Text = styled.div`
  text-align: center;
  ${({ theme }) => theme.font.title};
  white-space: pre-wrap;
`;
