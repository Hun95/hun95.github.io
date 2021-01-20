import styled from 'styled-components';

export const Banwrapper = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-template-columns: 4fr 1fr;
  background: white;
  height: auto;

  svg {
    max-width: 100%;
    margin-left: 10%;
    @media only screen and (max-width: 768px) {
      max-width: 100%;
    }
    animation: fill 0.5 ease forwards 12s;
  }
  path:nth-child(1) {
    stroke-dasharray: 1341.0504150390625;
    stroke-dashoffset: 1341.0504150390625;
    animation: line-anim 2s ease forwards 0.3;
  }
  path:nth-child(2) {
    stroke-dasharray: 1922.4263916015625;
    stroke-dashoffset: 1922.4263916015625;
    animation: line-anim 2s ease forwards 0.6s;
  }
  path:nth-child(3) {
    stroke-dasharray: 1606.509033203125;
    stroke-dashoffset: 1606.509033203125;
    animation: line-anim 2s ease forwards 0.9s;
  }
  path:nth-child(4) {
    stroke-dasharray: 1813.5357666015625;
    stroke-dashoffset: 1813.5357666015625;
    animation: line-anim 2s ease forwards 1.2s;
  }
  path:nth-child(5) {
    stroke-dasharray: 1273.2344970703125;
    stroke-dashoffset: 1273.2344970703125;
    animation: line-anim 2s ease forwards 1.5s;
  }
  @keyframes line-anim {
    to {
      stroke-dashoffset: 0;
    }
  }
  @keyframes fill {
    to {
      fill: black;
    }
  }
`;
