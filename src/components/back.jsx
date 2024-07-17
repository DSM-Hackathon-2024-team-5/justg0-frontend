import styled from "styled-components";
import BeforeLogo from "/images/before.svg";

export const Back = ({ children }) => {
  return (
    <Container>
      <Before src={BeforeLogo} />
      <Text>{children}</Text>
      <div style={{ width: 32 }}></div>
    </Container>
  );
};

const Container = styled.div`
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
