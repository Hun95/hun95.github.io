import React, { useState, useRef, useEffect } from 'react';
import Layout from '../components/Layout/';
import SEO from '../components/Seo';

import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import Sequence from '../components/Sequence';

const Chat = () => {
  return (
    <Layout>
      <SEO title='chat' description='welocome to chat' lang='ko' />
    </Layout>
  );
};

export default Chat;
