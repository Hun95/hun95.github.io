import React from "react";
import styled from "styled-components";
import BannerImg from "../images/banner2.jpg";
const Banner = () => {
  return (
    <>
      <Banwrapper src={BannerImg}></Banwrapper>
    </>
  );
};

export default Banner;

const Banwrapper = styled.img`
  margin: 2rem 0;
  width: 100%;

  height: auto;
`;
