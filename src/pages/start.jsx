import styled from "styled-components";
import { Button } from "../components/button";
import { Slider } from "rsuite";
import { useState } from "react";

const Start = () => {
  const [value, setValue] = useState(15000);
  const [theme, setTheme] = useState([
    { name: "산", selected: false },
    { name: "바다", selected: false },
    { name: "맑은 공기", selected: false },
    { name: "코틀린", selected: false },
    { name: "도시", selected: false },
    { name: "섬", selected: false },
    { name: "미세먼지", selected: false },
    { name: "시골", selected: false },
  ]);

  return (
    <Container>
      <Wrapper>
        <SettingTitle>거리 설정</SettingTitle>
        <MeterText>{value / 100}km</MeterText>
        <div style={{ width: "100%", padding: "12px", boxSizing: "border-box" }}>
          <Slider
            min={10}
            step={10}
            max={30000}
            value={value}
            className="custom-slider"
            graduated
            tooltip={false}
            defaultValue={15000}
            onChange={setValue}
          />
        </div>
      </Wrapper>
      <Wrapper>
        <SettingTitle>테마 설정</SettingTitle>
        <ButtonWrapper>
          {theme.map((res, idx) => {
            let copy = [...theme];
            copy[idx] = { ...theme[idx], selected: !theme[idx].selected };
            return (
              <Button key={res.name} type={res.selected ? "solid" : "outlined"} onClick={() => setTheme(copy)}>
                {res.name}
              </Button>
            );
          })}
        </ButtonWrapper>
      </Wrapper>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
          padding: "0 16px 32px 16px",
          marginTop: "auto",
        }}
      >
        <Button>여정 시작하기</Button>
      </div>
    </Container>
  );
};

export default Start;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.background};
  height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 0;
  margin-bottom: 8px;
  background-color: ${({ theme }) => theme.color.white};
`;

const SettingTitle = styled.span`
  ${({ theme }) => theme.font.title}
  margin-left: 16px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 16.5px;
  gap: 8px;
`;

const MeterText = styled.span`
  margin: 0 auto;
  ${({ theme }) => theme.font.display}
`;
