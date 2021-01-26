import React, { useRef, useEffect } from 'react';
import Layout from '../components/Layout/';
import SEO from '../components/Seo';

import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import Sequence from '../components/Sequence';
const Chat = () => {
  const ref = useRef();
  return (
    <Layout>
      <SEO title='chat' description='welocome to chat' lang='ko' />
      <Controller>
        <Scene duration='200%' triggerHook='onLeave' pin>
          {progress => (
            <div style={{ height: '100vh', position: 'relative' }}>
              <Sequence ref={ref} progress={progress} />
            </div>
          )}
        </Scene>
      </Controller>
    </Layout>
  );
};

export default Chat;

const VideoContainer = styled.div`
  text-align: center;
  height: 400vh;
  div {
    height: 100vh;
    width: 100%;
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  video {
    width: 80%;
  }
  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 80px;
    transform: translate(-50%, -50%);
    color: white;
  }
`;
const Section = styled.section`
  height: 100vh;
  color: black;
  h1 {
    padding-top: 300px;
    text-align: center;
    font-size: 80px;
  }
`;
