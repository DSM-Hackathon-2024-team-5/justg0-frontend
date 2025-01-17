import React from "react";
import styled from "styled-components";
import { Button } from "../components/button";
import { Link } from "react-router-dom";

const Body = styled.div`
  margin: 0;
`;

const Main = styled.main`
  margin: 16px;
  margin-top: 0;
  font-size: 100%;
  margin-bottom: 100px;
  padding: 10px;
  padding-top: 0;
`;

const TextInner = styled.div`
  font-size: 1rem;
  line-height: 1.5;

  form {
    font-weight: 500;
  }
`;

const ButtonBack = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 0 16px;
  padding-bottom: 32px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.color.white};
  bottom: 0;
`;

function App() {
  return (
    <Body>
      <Main>
        <TextInner>
          <form>
            <b>
              여러분을 환영합니다.
              <br />
              저스트고 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 네이버 서비스의 이용과
              관련하여 네이버 서비스를 제공하는 저스트고 주식회사(이하 저스트고)와 이를 이용하는 네이버 서비스 회원(이하
              ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 네이버 서비스 이용에 도움이 될 수 있는 유익한
              정보를 포함하고 있습니다. 네이버 서비스를 이용하시거나 저스트고 서비스 회원으로 가입하실 경우 여러분은 본
              약관 및 관련 운영 정책을 확인하거나 동의하게 되므로, 잠시 시간을 내시어 주의 깊게 살펴봐 주시기 바랍니다
              <br />
              <br />
              다양한 저스트고 서비스를 즐겨보세요.
              <br />
              저스트고는 www.naver.com을 비롯한 저스트고 도메인의 웹사이트 및 응용프로그램(어플리케이션, 앱)을 통해 정보
              검색, 다른 이용자와의 커뮤니케이션, 콘텐츠 제공, 상품 쇼핑 등 여러분의 생활에 편리함을 더할 수 있는 다양한
              서비스를 제공하고 있습니다. 여러분은 PC, 휴대폰 등 인터넷 이용이 가능한 각종 단말기를 통해 각양각색의
              네이버 서비스를 자유롭게 이용하실 수 있으며, 개별 서비스들의 구체적인 내용은 각 서비스 상의 안내,
              공지사항, 저스트고 웹고객센터(이하‘고객센터’) 도움말 등에서 쉽게 확인하실 수 있습니다.
              <br />
              네이버는 기본적으로 여러분 모두에게 동일한 내용의 서비스를 제공합니다. 다만,'청소년보호법'등 관련 법령이나
              기타 개별 서비스 제공에서의 특별한 필요에 의해서 연령 또는 일정한 등급을 기준으로 이용자를 구분하여
              제공하는 서비스의 내용, 이용 시간, 이용 횟수 등을 다르게 하는 등 일부 이용을 제한하는 경우가 있습니다.
              자세한 내용은 역시 각 서비스 상의 안내, 공지사항, 고객센터 도움말 등에서 확인하실 수 있습니다. 네이버
              서비스에는 기본적으로 본 약관이 적용됩니다만 네이버가 다양한 서비스를 제공하는 과정에서 부득이 본 약관 외
              별도의 약관, 운영정책 등을 적용하는 경우(예, 네이버페이, V LIVE 등)가 있습니다. 그리고 네이버 계열사가
              제공하는 특정 서비스의 경우에도(예, LINE, SNOW등) 해당 운영 회사가 정한 고유의 약관, 운영정책 등이 적용될
              수 있습니다. 이러한 내용은 각각의 해당 서비스 초기 화면에서 확인해 주시기 바랍니다.
            </b>
          </form>
        </TextInner>
      </Main>
      <ButtonBack>
        <Link to="/login" style={{ width: "100%", display: "flex", flexDirection: "column" }}>
          <Button onClick={() => window.hi.postMessage("hi")}>동의하고 가입하기</Button>
        </Link>
      </ButtonBack>
    </Body>
  );
}

export default App;
