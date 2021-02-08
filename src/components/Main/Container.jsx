import React from 'react';
import styled from 'styled-components';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
const Container = () => {
  return (
    <Section>
      <FirstSection />
      <SecondSection />
    </Section>
  );
};

export default Container;

const Section = styled.div``;
