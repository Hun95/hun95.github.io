import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Container, Image, Text } from './style';
import image from '../../images/banner2.webp';
import useTextAction from '../../hooks/useTextAction';
const Hero = () => {
  const textRef = useRef();
  const { isSecond } = useTextAction(textRef);

  return (
    <Container ref={textRef} kill={isSecond}>
      <Image src={image} />
      <Text>It's Show Time</Text>
    </Container>
  );
};

export default Hero;
