import React, { useEffect, useState } from "react";
import styled from "styled-components";
import move from "/images/move.svg";
import heart from "/images/heart.svg";
import map from "/images/map.svg";

//북위 33~43, 동경 124~132
const TripDetail = () => {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = { center: new kakao.maps.LatLng(36.3092042093, 127.4225159026) };
    const kakaoMap = new kakao.maps.Map(container, options);

    var markerPosition = new window.kakao.maps.LatLng(36.3092042093, 127.4225159026);

    var marker = new window.kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(kakaoMap);
  }, []);

  return (
    <Container>
      <Head2>
        <Head2Text>24.7km 이동!</Head2Text>
      </Head2>
      <MapField>
        <Map id="map" style={{ width: "100%", height: "100%" }}></Map>
      </MapField>
      <Detail>
        <DetailTitle>
          <DetailTitleText>보문산 보문대</DetailTitleText>
        </DetailTitle>
        <DetailContent>
          <DetailContentText>
            보문산(寶文山)은 대전의 남쪽, 시 중심부에 근접한 해발 457.6m의 산이다. 지금은 둔산 개발, 심지어 노은 개발로
            대전 중심부라 하기엔 무리지만, "서대전"과 "구도심"이 보문산 자락에 접해있다. 즉 대전의 역사와 오랜 시간 함께
            한 산이다. 과거 대전 시티즌의 홈구장이었던 한밭종합운동장과 한화 이글스의 홈구장 대전 한화생명 이글스파크가
            이 근처에 위치해 있다.
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
  /* height: 100vh; */
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

const Map = styled.div`
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
