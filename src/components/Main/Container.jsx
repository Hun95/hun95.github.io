import React from 'react';
import styled from 'styled-components';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import FourthSection from './FourthSection';
const Container = () => {
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
