import styled from "styled-components";
import JustGo from "/images/JustGO.svg";
import Apple from "/images/apple.svg";
import login from "/images/login.svg";
import login2 from "/images/whiteLogin.svg";
import Google from "/images/google.svg";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <Container>
      <TitleField src={JustGo} />
      <ButtonField>
        <AppleButton>
          <AppleLogo src={Apple} />
          <span>애플 계정으로 시작하기</span>
        </AppleButton>
        <Link to="/login">
          <LoginButton>
            <span>로그인</span>
            <LoginLogo src={login} />
          </LoginButton>
        </Link>
        <Link to="/signup">
          <SignUpButton>
            <span>가입하기</span>
            <WhiteLogin src={login2} />
          </SignUpButton>
        </Link>
        <GoogleButton>
          <GoogleLogo src={Google} />
          <span>구글 계정으로 시작하기</span>
        </GoogleButton>
      </ButtonField>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  height: 100vh;
  background-image: url("/images/BRIDGE.svg");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 48px 16px;
  box-sizing: border-box;
`;

const TitleField = styled.img`
  height: 15%;
  width: 80%;
  margin-top: 100px;
`;

const ButtonField = styled.div`
  margin-top: auto;
  width: 347px;
  height: 112px;
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
`;

const AppleButton = styled.button`
  width: auto;
  padding: 12px 16px;
  border-radius: 10px;
  border: none;
  font-size: 0.9em;
  font-size: 0.9em;
  display: flex;
  align-items: center;
  text-align: center;
  gap: 8px;
  cursor: pointer;
  white-space: nowrap;
`;

const AppleLogo = styled.img`
  width: 16px;
  height: 16px;
`;

const LoginButton = styled.button`
  width: auto;
  border-radius: 10px;
  padding: 12px 16px;
  border: none;
  font-size: 0.9em;
  display: flex;
  align-items: center;
  gap: 8px;
  text-align: center;
  cursor: pointer;
`;

const LoginLogo = styled.img`
  width: 16px;
  height: 16px;
`;

const SignUpButton = styled.button`
  background-color: #ff6dd6;
  color: white;
  width: auto;
  padding: 12px 16px;
  border-radius: 10px;
  border: none;
  font-size: 0.9em;
  display: flex;
  align-items: center;
  font-size: 0.9em;
  cursor: pointer;
  white-space: nowrap;
  gap: 16px;
`;

const WhiteLogin = styled.img`
  width: 16px;
  height: 16px;
`;

const GoogleButton = styled.button`
  width: auto;
  padding: 12px 16px;
  border-radius: 10px;
  border: none;
  text-align: center;
  font-size: 0.9em;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
`;

const GoogleLogo = styled.img`
  width: 16px;
  height: 16px;
`;
