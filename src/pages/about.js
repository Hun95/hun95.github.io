import React from "react";

import Layout from "../components/layout";
import styled from "styled-components";
import SEO from "../components/seo";
const Box = styled.div`
  width: 50;
  height: auto;
  background-color: red;

  margin: 10px;
`;
const AboutPage = () => (
  <Layout>
    <SEO title="AboutPage" />
    <div style={{ display: `inline-flex`, flexFlow: `column-reverse` }}>
      <Box>hello</Box>
      <Box>hello</Box>
      <Box>hello</Box>
      <Box>hello</Box>
    </div>

    <div style={{ display: `inline-flex`, flexFlow: `column-reverse` }}>
      <Box>hello</Box>
      <Box>hello</Box>
      <Box>hello</Box>
      <Box>1</Box>
    </div>
  </Layout>
);

export default AboutPage;

// / want to create localhost:8000/
