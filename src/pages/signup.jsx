import React from "react";
import styled from "styled-components";
import { Button } from "../components/button";

const AppContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  padding: 32px 16px;
  box-sizing: border-box;
`;

const TextField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  box-sizing: border-box;
  border-radius: 10px;
  border: none;
  border: 1px solid rgba(0, 0, 0, 0.288);
  width: 100%;
  padding: 16px;

  &:focus {
    outline: none;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

function Signup() {
  return (
    <AppContainer>
      <div style={{ marginTop: 80, marginBottom: 8 }}>
        <img src="/images/Group11.svg" alt="JustGO" />
      </div>

      <TextField>
        <Input type="email" placeholder="이메일을 입력해주세요" />
        <Input type="password" placeholder="비밀번호를 입력해주세요" />
        <Input type="text" placeholder="닉네임을 입력해주세요" />
      </TextField>

      <Buttons>
        <Button type="solid">가입하기</Button>
        <Button type="outlined">로그인하러 가기</Button>
      </Buttons>
    </AppContainer>
  );
}

export default Signup;
