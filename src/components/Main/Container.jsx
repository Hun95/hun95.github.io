import FirstSection from './FirstSection';
import FourthSection from './FourthSection';
import React from 'react';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/MainPageProvider';
const Container = () => {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <div style={{ position: 'absolute', top: '50%', left: '50%' }}>
        LOADING...
      </div>
    );
  }
  return (
    <Section>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </Section>
  );
};

export default Container;

const Section = styled.div``;
