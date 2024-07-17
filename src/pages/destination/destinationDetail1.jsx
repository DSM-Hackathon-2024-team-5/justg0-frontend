import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Character from "/images/character.svg";
import { Button } from "../../components/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const DestinationDetail1 = () => {
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 4000);
  }, []);

  return (
    <>
      {isLoaded ? (
        <Container style={{ justifyContent: "space-between" }}>
          <div style={{ width: "100%", height: "300px", overflow: "hidden" }}>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              loop
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
              </SwiperSlide>
            </Swiper>
          </div>
          <DescriptionWrapper>
            <CharacterImage2 src={Character} alt="character2" />
            <Text>이번 여정에서 볼 수 있는 것들이에요</Text>
          </DescriptionWrapper>

          <Link
            to="/destination/2"
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              boxSizing: "border-box",
              padding: "0 16px 32px 16px",
              textDecoration: "none",
            }}
          >
            <Button>확인했어요</Button>
          </Link>
        </Container>
      ) : (
        <Container>
          <CharacterImage src={Character} alt="character" />
          <Text>{"준자보이님이 좋아하실만한\n 여행지를 골라봤어요!"}</Text>
        </Container>
      )}
    </>
  );
};

export default DestinationDetail1;

const slideIn = keyframes`
  from {
      opacity: 0;
      margin-top: 30px;
    }
    
    to {
        opacity: 1;
    }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  animation: ${slideIn} 2s 0s ease-in;
`;

const CharacterImage = styled.img`
  width: 120px;
  height: 120px;
`;

const Text = styled.div`
  text-align: center;
  ${({ theme }) => theme.font.title};
  white-space: pre-wrap;
`;

const CharacterImage2 = styled.img`
  width: 60px;
  height: 60px;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 60px;
  animation: ${slideIn} 2s 0s ease-in;
`;
