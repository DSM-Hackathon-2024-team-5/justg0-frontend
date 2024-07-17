import React from "react";
import styled from "styled-components";
import move from "/images/move.svg";
import heart from "/images/heart.svg";
import map from "/images/map.svg";

const TripDetail = () => {
  return (
    <Container>
      <HeadField>
        <Head1>
          <Move src={move} />
          <Head1Text>보문산 보문대</Head1Text>
          <Heart src={heart} />
        </Head1>
        <Head2>
          <Head2Text>24.7km 이동!</Head2Text>
        </Head2>
      </HeadField>
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
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  background-color: #c3b7b73e;
`;

const HeadField = styled.div`
  width: 100%;
  height: 13%;
  background-color: #ffffff;
`;

const Head1 = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Move = styled.img`
  width: 2%;
  margin-left: 5%;
`;

const Heart = styled.img`
  width: 6%;
  margin-right: 3%;
`;

const Head1Text = styled.span`
  font-size: 0.9em;
  font-weight: 540;
`;

const Head2 = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  background-color: #ffffff;
`;

const Head2Text = styled.span`
  font-size: 1.7em;
  font-weight: 540;
  margin-left: 3%;
`;

const MapField = styled.div`
  width: 100%;
  height: 27%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 13%;
`;

const Map = styled.img`
  width: 95%;
  margin-right: 1%;
  border-radius: 5px;
`;

const Detail = styled.div`
  width: 100%;
  height: 24%;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`;

const DetailTitle = styled.div`
  width: 100%;
  height: 19%;
  display: flex;
  align-items: center;
`;

const DetailTitleText = styled.span`
  margin-left: 3%;
  font-size: 1.1em;
  margin-top: 1%;
`;

const DetailContent = styled.div`
  width: 93%;
  height: 84%;
  margin-left: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailContentText = styled.p`
  font-size: 1em;
  text-align: justify;
  line-height: 1.3em;
`;

const Info = styled.div`
  margin-top: 4%;
  background-color: #ffffff;
  width: 100%;
  height: 26%;
`;

const InfoTitle = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 11%;
  display: flex;
  align-items: center;
`;

const InfoTitleText = styled.span`
  margin-left: 3%;
  font-size: 1.07em;
`;

const Distance = styled.div`
  width: 100%;
  height: 27%;
  margin-top: 1%;
  display: flex;
  flex-direction: column;
`;

const Dis = styled.span`
  margin-left: 3%;
  margin-top: 1%;
`;

const Num = styled.span`
  font-size: 1.7em;
  margin-left: 3%;
`;

const StartTime = styled.div`
  width: 100%;
  height: 27%;
  margin-top: 1%;
  display: flex;
  flex-direction: column;
`;

const EndTime = styled.div`
  width: 100%;
  height: 27%;
  margin-top: 1%;
  display: flex;
  flex-direction: column;
`;
