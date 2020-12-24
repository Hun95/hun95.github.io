import React from "react";
import styled from "styled-components";
import BannerImg from "../images/1.jpg";
const Banner = () => {
  return (
    <>
      <Banwrapper></Banwrapper>
    </>
  );
};

export default Banner;

const Banwrapper = styled.div`
  margin: 2rem 0;
  width: 100%;
  background: linear-gradient(90deg, #ff0000 0%, #ffd42a 99%);
  height: 200px;
  box-shadow: 0 20px 30px -19px #ffe787;
`;
