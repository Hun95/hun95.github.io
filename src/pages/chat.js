import React, { useState, useRef, useEffect } from 'react';
import Layout from '../components/Layout/';
import SEO from '../components/Seo';

import styled from 'styled-components';

const Chat = () => {
  const containerRef = useRef();
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    let progress =
      window.pageYOffset /
      (containerRef.current.offsetHeight - window.innerHeight);

    console.log(progress);
  });

  return (
    <Layout>
      <SEO title='chat' description='welocome to chat' lang='ko' />
      <Container ref={containerRef}>
        <h1 id='first'>Hello</h1>
        <h1 id='second'>Bye</h1>
      </Container>
      <div style={{ height: '500px' }}>ff</div>
    </Layout>
  );
};

export default Chat;

const Container = styled.div`
  #first {
    visibility: hidden;
  }
  #second {
    visibility: hidden;
  }
  width: 100%;
  height: 100%;
  min-height: 500vh;
`;
