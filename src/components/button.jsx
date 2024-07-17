import { forwardRef } from "react";
import styled from "styled-components";

export const Button = ({ type = "solid", children }) => {
  return <ButtonContainer type={type}>{children}</ButtonContainer>;
};

const ButtonContainer = styled.button`
  border: 0;
  outline: 0;
  width: auto;
  padding: 12px 16px;
  background-color: ${(props) => (props.type === "solid" ? "#fff" : "#ff6dd6")};
  color: ${(props) => (props.type === "solid" ? "#ff6dd6" : "#fff")};
  border: 1px solid ${(props) => (props.type === "solid" ? "#ff6dd6" : "#ff6dd6")};
  border-radius: 10px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  font-family: Roboto;
  letter-spacing: 0.25px;
`;
