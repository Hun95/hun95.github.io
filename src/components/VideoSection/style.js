import styled from 'styled-components';

export const VideoContainer = styled.section`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  margin-top: -65px;

  color: #fff;

  :before {
    content: '';

    position: absolute;

    z-index: 2;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2), transparent 100%);
  }
`;

export const Video = styled.video`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;
