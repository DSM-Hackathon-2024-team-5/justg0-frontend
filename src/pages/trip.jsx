import React from 'react';
import styled from 'styled-components';

const Body = styled.div`
  background-color: rgb(245, 245, 245);
  margin: 0;
`;

const Title = styled.div`
  background-color: white;
  height: 200px;

  img {
    width: 100vw;
  }

  p {
    font-size: 28px;
    margin-left: 15px;
    margin-top: 30px;
    line-height: 40px;
  }
    ${({theme, $bolder}) => ($bolder === theme.font.headLine)};
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

  #KM b{
    display: flex;
    justify-content: flex-start;
    float: left;
  }

  img {
    /* 이미지 스타일이 여기에 추가될 수 있습니다 */
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
        <img src="/images/Group15.svg" alt="title logo" />
        <p $bolder>
          <b>
            지금까지 <span>1234.3km</span>
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
            보문산 보문대
              <br />
              <span>2008.10.11</span>
            </b>
          </p>
          <span id="KM">24.3km</span>
          <img src="" alt="" />
        </Record>

        <Record>
          <h1>2</h1>
          <p>
            <b>
            넘어 계룡
              <br />
              <span>2008.10.11</span>
            </b>
          </p>
          <span id="KM">315.7km</span>
          <img src="" alt="" />
        </Record>

        <Record>
          <h1>3</h1>
          <p>
            <b>
            계룡을 넘어
              <br />
              <span>2008.10.11</span>
            </b>
          </p>
          <span id="KM">315.7km</span>
          <img src="" alt="" />
        </Record>

        <Record>
          <h1>4</h1>
          <p>
            <b>
            계룡을 넘어
              <br />
              <span>2008.10.11</span>
            </b>
          </p>
          <span id="KM">315.7km</span>
          <img src="" alt="" />
        </Record>

        <Record>
          <h1>5</h1>
          <p>
            <b>
            계룡을 넘어
              <br />
              <span>2008.10.11</span>
            </b>
          </p>
          <span id="KM">315.7km</span>
          <img src="" alt="" />
        </Record>

        <Record>
          <h1>6</h1>
          <p>
            <b>
            계룡을 넘어
              <br />
              <span>2008.10.11</span>
            </b>
          </p>
          <span id="KM">315.7km</span>
          <img src="" alt="" />
        </Record>
      </TripRecord>
    </Body>
  );
}

export default App;
