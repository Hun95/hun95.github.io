import React from 'react';
import { useGlobalContext } from '../../context/MainPageProvider';
import styled from 'styled-components';

const FourthSection = () => {
  const { fourthRef } = useGlobalContext();
  return (
    <div ref={fourthRef}>
      <h1>hi</h1>
    </div>
  );
};

export default FourthSection;
