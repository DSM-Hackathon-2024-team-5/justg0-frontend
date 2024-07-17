import React from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
  background-color: #FFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 90%
  padding-left: 20px;
  padding-top: 10px;
  margin-bottom: 116px;
`;

const Img = styled.img`
  padding-left: 10px;
`

const Title = styled.div`
  margin-bottom: 62px;
  margin-right: 65px;
`;

const TextField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  padding-left: 20px;
  width: 370px;
  height: 50px;
  border-radius: 10px;
  border: 0.1px solid rgba(0, 0, 0, 0.288);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  border: none;
  width: 360px;
  height: 35px;

  &:focus {
    outline: none;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 270px;
`;

const Button = styled.button`
  width: 370px;
  height: 43px;
  border-radius: 10px;
  border: 0.1px solid ${props => (props.$primary ? 'rgba(0, 0, 0, 0)' : '#FF6DD6')};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  color: ${props => (props.$primary ? 'white' : '#FF6DD6')};
  background-color: ${props => (props.$primary ? '#FF6DD6' : '#ffffff')};
  font-size: 14px;
  margin-top: -40px;

  &:hover {
    cursor: pointer;
  }
`;

function Signup() {
  return (
    <AppContainer>
      <Header>
        <Img src="/images/navigate_before.svg" width="35" height="35" alt="navigate back" />
      </Header>

      <Title>
        <img src="/images/Group11.svg" alt="JustGO" />
      </Title>

      <TextField>
        <InputContainer id="email">
          <Input type="email" placeholder="이메일을 입력해주세요" />
        </InputContainer>
        <InputContainer id="password">
          <Input type="password" placeholder="비밀번호를 입력해주세요" />
        </InputContainer>
        <InputContainer id="password">
          <Input type="text" placeholder="닉네임을 입력해주세요" />
        </InputContainer>
      </TextField>

      <Buttons>
        <Button $primary type="submit">가입하기</Button>
        <Button type="submit" id='login'>로그인하러 가기</Button>
      </Buttons>
    </AppContainer>
  );
}

export default Signup;
