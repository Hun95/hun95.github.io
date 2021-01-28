import React from 'react';
import { VideoContainer, Video } from './style';
import MainVideo from '../../images/MainVideo.mp4';
import styled from 'styled-components';
const VideoSection = () => {
  return (
    <VideoContainer>
      <HeroBg>
        <Video
          src={MainVideo}
          type='video/mp4'
          autoPlay
          muted
          playsInline
          loop
        />
      </HeroBg>
      <HeroContent>
        <HeroItems>
          <HeroH1>당신의</HeroH1>
          <HeroP>지름길</HeroP>
        </HeroItems>
      </HeroContent>
    </VideoContainer>
  );
};

export default VideoSection;

const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const HeroContent = styled.div`
  z-index: 3;
  position: relative;
  height: calc(100vh- 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;
const HeroItems = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  color: #fff;
  line-height: 1.1;
`;
const HeroH1 = styled.h1`
  font-size: 80px;
  font-family: 'ChosunKg', sans-serif;

  margin-bottom: 2rem;
  letter-spacing: 3px;

  padding: 0 1rem;
`;
const HeroP = styled.p`
  font-family: 'ChosunKg', sans-serif;
  font-size: clamp(1rem, 3vw, 3rem);
`;
