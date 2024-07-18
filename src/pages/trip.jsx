import React from "react";
import styled from "styled-components";

const Body = styled.div`
  background-color: rgb(245, 245, 245);
  margin: 0;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  height: 200px;
  display: flex;
  flex-direction: column;
  position: relative;

  img {
    height: 35px;
    width: 35px;
    position: absolute;
    top: 10px;
    left: 10px;
  }

  h3 {
    font-size: 18px;
    margin: 0;
    margin-top: 20px;
    text-align: center;
  }

  p {
    font-size: 28px;
    margin-left: 15px;
    /* margin-top: 30px; */
    line-height: 40px;
  }
  ${({ theme, $bolder }) => $bolder === theme.font.headLine};
`;

const TripRecord = styled.div`
  background-color: white;
  position: relative;
  top: 20px;
`;

const Record = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  padding-bottom: 10px;
  justify-content: space-between;

  h1 {
    font-size: 50px;
    font-weight: 500;
    margin-right: 15px;
    margin-left: 15px;
    display: flex;
    align-items: center;

    &:first-child {
      font-size: 46px;
    }
  }

  p {
    b {
      display: block;

      span {
        display: block;
      }
    }
  }

  #KM {
    font-size: 30px;
    display: flex;
    align-items: center;
    margin-left: 100px;
  }

  #KM b {
    display: flex;
    justify-content: flex-start;
    float: left;
  }

  img {
    transform: rotate(180deg);
    margin-top: 5px;
    width: 30px;
    height: 30px;
  }
`;

const RecordTitle = styled.p`
  margin: 0;
  margin-left: 15px;
  padding-top: 20px;
  font-size: 17px;
  font-weight: 700;
`;

function App() {
  return (
    <Body>
      <Title>
        <p $bolder>
          <b>
            지금까지 <span>1134.8 km</span>
            <br />
            여행했어요!
          </b>
        </p>
      </Title>

      <TripRecord>
        <RecordTitle>여행기록</RecordTitle>
        <br />
        <Record>
          <h1>1</h1>
          <p>
            <b>
              전라북도 고창
              <br />
              <span>2021.10.11</span>
            </b>
          </p>
          <span id="KM">147.7km</span>
          <img src="/images/Group13.svg"/>
        </Record>

        <Record>
          <h1>2</h1>
          <p>
            <b>
              통영 한산도
              <br />
              <span>2021.12.1</span>
            </b>
          </p>
          <span id="KM">255.6km</span>
          <img src="/images/Group13.svg" />
        </Record>

        <Record>
          <h1>3</h1>
          <p>
            <b>
              충청북도 단양
              <br />
              <span>2022.8.13</span>
            </b>
          </p>
          <span id="KM">168.4km</span>
          <img src="/images/Group13.svg" />
        </Record>

        <Record>
          <h1>4</h1>
          <p>
            <b>
              강원도 고성
              <br />
              <span>2022.9.18</span>
            </b>
          </p>
          <span id="KM">194.7km</span>
          <img src="/images/Group13.svg" />
        </Record>

        <Record>
          <h1>5</h1>
          <p>
            <b>
              경상북도 문경
              <br />
              <span>2023.5.17</span>
            </b>
          </p>
          <span id="KM">128.2km</span>
          <img src="/images/Group13.svg" />
        </Record>

        <Record>
          <h1>6</h1>
          <p>
            <b>
              인천 소야도
              <br />
              <span>2024.3.18</span>
            </b>
          </p>
          <span id="KM">240.2km</span>
          <img src="/images/Group13.svg" />
        </Record>
      </TripRecord>
    </Body>
  );
}

export default App;
