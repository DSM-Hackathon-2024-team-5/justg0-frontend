import React from "react";
import styled from "styled-components";
import move from "/images/move.svg";
import heart from "/images/heart.svg";
import map from "/images/map.svg";

const TripDetail = () => {
  return (
    <Container>
      <Head2>
        <Head2Text>24.7km 이동!</Head2Text>
      </Head2>
      <MapField>
        <Map src={map} />
      </MapField>
      <Detail>
        <DetailTitle>
          <DetailTitleText>보문산 보문대</DetailTitleText>
        </DetailTitle>
        <DetailContent>
          <DetailContentText>
            보문산 보문대는 대전에서 제일가는 산이지만 그 명성은 성심당보다 못하여 무시받지는 않지만 그래도 나쁘지 않은
            산이다. 보문산 보문대는 대전에서 제일가는 산이지만 그 명성은 성심당보다 못하여 무시받지는 않지만 그래도
            나쁘지 않은 산이다. 보문산 보문대는 대전에서 제일가는 산이지만 그 명성은 성심당보다 못하여 무시받지는 않지만
            그래도 나쁘지 않은 산이다.
          </DetailContentText>
        </DetailContent>
      </Detail>
      <Info>
        <InfoTitle>
          <InfoTitleText>여정 정보</InfoTitleText>
        </InfoTitle>
        <Distance>
          <Dis>거리</Dis>
          <Num>24.7km</Num>
        </Distance>
        <StartTime>
          <Dis>시작 시간</Dis>
          <Num>12:48</Num>
        </StartTime>
        <EndTime>
          <Dis>종료 시간</Dis>
          <Num>16:20</Num>
        </EndTime>
      </Info>
    </Container>
  );
};

export default TripDetail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.background};
`;

const Head2 = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 32px 16px;
  display: flex;
  align-items: center;
  background-color: #ffffff;
`;

const Head2Text = styled.span`
  ${({ theme }) => theme.font.headLine}
`;

const MapField = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  box-sizing: border-box;
`;

const Map = styled.img`
  width: 100%;
  border-radius: 5px;
`;

const Detail = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 8px;
  background-color: #ffffff;
  box-sizing: border-box;
`;

const DetailTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const DetailTitleText = styled.span`
  ${({ theme }) => theme.font.title}
`;

const DetailContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailContentText = styled.p`
  ${({ theme }) => theme.font.body}
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 100%;
  padding: 16px;
  gap: 8px;
  box-sizing: border-box;
`;

const InfoTitle = styled.div`
  background-color: #ffffff;
  width: 100%;
  display: flex;
  align-items: center;
`;

const InfoTitleText = styled.span`
  ${({ theme }) => theme.font.title}
`;

const Distance = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Dis = styled.span`
  ${({ theme }) => theme.font.body}
`;

const Num = styled.span`
  ${({ theme }) => theme.font.headLine}
`;

const StartTime = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const EndTime = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
