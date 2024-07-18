import React, { useEffect, useState } from "react";
import styled from "styled-components";
import JustGoPink from "/images/JustGoPink.svg";
import { Button } from "../components/button";
import { Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { Back } from "../components/back";

const AppContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 32px 16px;
  box-sizing: border-box;
`;

const Title = styled.div`
  margin-bottom: 62px;
  ${({ theme }) => theme.font.display};
`;

const TextField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
  width: 100%;
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
  margin-top: auto;
`;

function Login() {
  const { state, onChange } = useForm({ email: "", password: "" });

  useEffect(() => {
    // function handleEvent(message) {
    //   alert("성공");
    // }
    // window.addEventListener("message", handleEvent);
    // return () => window.removeEventListener("message", handleEvent);
  }, []);

  return (
    <AppContainer>
      <Back />
      <div style={{ marginTop: 80, marginBottom: 8 }}>
        <img src={JustGoPink} alt="JustGO" />
      </div>
      <Title>로그인</Title>

      <TextField>
        <Input name="email" type="email" placeholder="이메일을 입력해주세요" onChange={onChange} value={state.email} />
        <Input
          name="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          onChange={onChange}
          value={state.password}
        />
      </TextField>

      <Buttons>
        <Button type="solid" onClick={() => window.login.postMessage("success")}>
          로그인
        </Button>
        <Link to="/signup" style={{ width: "100%", display: "flex", flexDirection: "column" }}>
          <Button type="outlined">회원가입하러 가기</Button>
        </Link>
      </Buttons>
    </AppContainer>
  );
}

export default Login;
