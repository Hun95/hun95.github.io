import React, { useEffect } from 'react';
import styled from 'styled-components';
import BannerImg from '../images/banner2.webp';
const Banner = () => {
  useEffect(() => {
    const logo = document.querySelectorAll('#main path');
    for (let i = 0; i < logo.length; i++) {
      console.log(`${logo[i].getTotalLength()}`);
    }
    console.log(logo);
  }, []);
  return (
    <>
      <Banwrapper>
        <svg
          id='main'
          width='1303'
          height='269'
          viewBox='0 0 1303 269'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M232.648 95.696C172.456 87.344 141.928 52.784 141.928 21.968V9.29599H101.32V21.968C101.32 53.072 71.08 87.344 10.6 95.696L25 126.224C71.368 119.312 104.776 97.712 121.768 69.2C138.76 97.712 171.88 119.312 218.248 126.224L232.648 95.696ZM241.288 145.808H1.672V176.624H101.608V267.056H139.624V176.624H241.288V145.808Z'
            stroke='black'
            stroke-width='2'
            mask='url(#path-1-outside-1)'
          />
          <path
            d='M348.978 193.328H450.93V233.936H348.978V193.328ZM311.538 263.6H488.082V163.664H311.538V263.6ZM407.73 94.256C408.882 89.648 409.458 84.752 409.458 79.856C409.458 74.96 408.882 70.064 407.73 65.744H450.066V94.256H407.73ZM339.474 112.688C319.89 112.688 305.777 100.592 305.777 79.856C305.777 59.696 319.89 47.6 339.474 47.6C359.058 47.6 373.458 59.696 373.458 79.856C373.458 100.592 359.058 112.688 339.474 112.688ZM450.066 1.51999V35.504H391.314C378.642 22.832 360.498 15.344 339.474 15.344C300.306 15.344 269.777 42.416 269.777 79.856C269.777 117.584 300.306 144.368 339.474 144.368C360.21 144.368 378.354 137.168 390.738 124.784H450.066V151.856H488.082V1.80799L450.066 1.51999Z'
            stroke='black'
            stroke-width='2'
            mask='url(#path-1-outside-1)'
          />
          <path
            d='M681.595 107.216C645.883 114.416 611.611 117.008 579.931 117.584V19.088H541.915V149.264H564.667C602.107 149.264 642.715 146.672 686.203 137.744L681.595 107.216ZM607.291 174.608H569.275V262.16H748.699V231.92H607.291V174.608ZM740.059 75.824V1.51999H702.043V192.176H740.059V107.792H775.195V75.824H740.059Z'
            stroke='black'
            stroke-width='2'
            mask='url(#path-1-outside-1)'
          />
          <path
            d='M1016.52 1.51999H978.213V195.632H1016.52V1.51999ZM961.508 134C918.308 122.192 899.013 92.528 899.013 63.44V62H952.292V32.048H899.013V2.95999H860.997V32.048H807.429V62H860.997V63.44C860.997 94.544 841.989 125.648 798.789 138.32L816.645 167.984C847.461 159.056 868.773 139.76 880.581 115.568C892.965 137.744 913.7 155.312 943.94 163.664L961.508 134ZM877.989 231.92V178.64H839.972V262.16H1023.14V231.92H877.989Z'
            stroke='black'
            stroke-width='2'
            mask='url(#path-1-outside-1)'
          />
          <path
            d='M1301.04 129.68H1266.19C1272.81 92.528 1272.81 65.456 1272.81 40.688V16.784H1088.78V47.312H1235.66C1235.66 70.064 1235.09 95.984 1228.46 129.68H1061.42V160.208H1160.49V266.768H1199.09V160.208H1301.04V129.68Z'
            stroke='black'
            stroke-width='2'
            mask='url(#path-1-outside-1)'
          />
        </svg>
      </Banwrapper>
    </>
  );
};

export default Banner;

const Banwrapper = styled.div`
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
