import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Container, Image, Text } from './style';
import image from '../../images/banner2.webp';
import useTextAction from '../../hooks/useTextAction';
const Hero = () => {
  const { isShow, showRef } = useTextAction();
  return (
    <Container ref={showRef} rotate={isShow}>
      <Image src={image} />
      <Text>It's Show Time</Text>
    </Container>
  );
};

export default Hero;
