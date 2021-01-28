import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Container, Image, Text } from './style';
import image from '../../images/banner2.webp';

const Hero = () => {
  const [scroll, setScroll] = useState(false);

  const HeroRef = useRef();

  const headerChange = useCallback(() => {
    if (window.pageYOffset >= HeroRef.current.offsetTop - 450) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }, [HeroRef]);
  useEffect(() => {
    window.addEventListener('scroll', headerChange);
    return () => {
      window.removeEventListener('scroll', headerChange);
    };
  });

  return (
    <Container ref={HeroRef} rotate={scroll}>
      <Image src={image} />
      <Text>It's Show Time</Text>
    </Container>
  );
};

export default Hero;
