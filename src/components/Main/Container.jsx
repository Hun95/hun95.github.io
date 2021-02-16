import React from 'react';
import styled from 'styled-components';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
const Container = () => {
  return (
    <Section>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </Section>
  );
};

export default Container;

const Section = styled.div``;
