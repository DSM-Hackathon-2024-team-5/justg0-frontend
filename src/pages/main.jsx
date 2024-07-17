import styled from "styled-components"
import JustGo from "../assets/JustGO.svg"
import Apple from "../assets/apple.svg"
import login from "../assets/login.svg"
import login2 from "../assets/whiteLogin.svg"
import Google from "../assets/google.svg"

const Main = () => {
  return <Container>
      <TitleField src={JustGo} />
        <ButtonField>
        <Buttons>
        <AppleButton>
          <AppleLogo src={Apple} />
          애플 계정으로 시작하기
        </AppleButton>
        <LoginButton>
          로그인
          <LoginLogo src={login} />
        </LoginButton>
      </Buttons>
      <Buttons2>
        <SignUpButton>
          가입하기
          <WhiteLogin src={login2} />
        </SignUpButton>
        <GoogleButton>
          <GoogleLogo src={Google} />
          구글 계정으로 시작하기
        </GoogleButton>
      </Buttons2>
      </ButtonField>
    </Container>
};

export default Main;

const Container = styled.div`
  height: 100vh;
  background-image: url('src/assets/BRIDGE.svg');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const TitleField = styled.img`
  height: 15%;
  width: 80%;
  margin-left: 4%;
  margin-top: 33%;
`;

const ButtonField = styled.div`
  margin-top: 103%;
  width: 100%;
  height: 20%;
  position: relative;
  display: flex;
  flex-direction: column-reverse;
`;

const Buttons = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  align-items: center;
  position: absolute;
  margin-bottom: 20%;
`;

const AppleButton = styled.button`
  width: 55%;
  height: 60%;
  margin-left: 4%;
  border-radius: 10px;
  border: none;
  font-size: .9em;
  display: flex;
  align-items: center;
  justify-content: end;
  padding-right: 4%;
  cursor: pointer;
`;

const AppleLogo = styled.img`
  width: 10%;
  margin-right: 8%;
`;

const LoginButton = styled.button`
  width: 27%;
  height: 60%;
  margin-left: 4%;
  border-radius: 10px;
  border: none;
  font-size: .9em;
  display: flex;
  align-items: center;
  padding-left: 5%;
  cursor: pointer;
  `;

const LoginLogo = styled.img`
  width: 30%;
  height: 30%;
  margin-left: 10%;
`;

const Buttons2 = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  align-items: center;
  position: absolute;
`;

const SignUpButton = styled.button`
  background-color: #FF6DD6;
  color: white;
  width: 30%;
  height: 60%;
  margin-top: 1%;
  margin-left: 4%;
  border-radius: 10px;
  border: none;
  font-size: .9em;
  display: flex;
  align-items: center;
  padding-left: 4%;
  font-size: .9em;
  cursor: pointer;
  margin-bottom: 8%;
`;

const WhiteLogin = styled.img`
  margin-left: 18%;
`;

const GoogleButton = styled.button`
  width: 57%;
  height: 60%;
  margin-top: 1%;
  border-radius: 10px;
  border: none;
  margin-left: 3%;
  text-align: center;
  font-size: .9em;
  cursor: pointer;
  margin-bottom: 8%;
  display: flex;
  align-items: center;
`;

const GoogleLogo = styled.img`
  margin-right: 9%;
  margin-left: 3%;
`;