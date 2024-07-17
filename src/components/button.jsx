import { forwardRef } from "react";
import styled, { css } from "styled-components";

export const Button = ({ type = "solid", children, ...props }) => {
  return (
    <ButtonContainer $type={type} {...props}>
      {children}
    </ButtonContainer>
  );
};

const buttonType = (type) => {
  switch (type) {
    case "solid":
      return css`
        background-color: ${({ theme }) => theme.color.mainDarken};
        color: ${({ theme }) => theme.color.white};
      `;
    case "outlined":
      return css`
        background-color: ${({ theme }) => theme.color.white};
        color: ${({ theme }) => theme.color.mainDarken};
        border: 1px solid ${({ theme }) => theme.color.mainDarken};
      `;
  }
};

const ButtonContainer = styled.button`
  border: 0;
  outline: 0;
  width: auto;
  padding: 12px 16px;
  border-radius: 10px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  font-family: Roboto;
  letter-spacing: 0.25px;
  ${({ $type }) => buttonType($type)};
  &:active {
    opacity: 0.7;
  }
`;
