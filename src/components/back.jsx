import styled from "styled-components";
import BeforeLogo from "/images/before.svg";
import { Link } from "react-router-dom";

export const Back = ({ children }) => {
  return (
    <Link to="/">
      <Container>
        <Before src={BeforeLogo} />
        <Text>{children}</Text>
        <div style={{ width: 32 }}></div>
      </Container>
    </Link>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 8px 12px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.color.white};
`;

const Before = styled.img`
  width: 32px;
  height: 32px;
`;

const Text = styled.span`
  color: #000;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.15px;
`;
