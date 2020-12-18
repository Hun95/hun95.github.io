import React from "react";

import Layout from "../components/Layout";
import styled from "styled-components";
import SEO from "../components/Seo";
const Box = styled.div`
  width: 50;
  height: auto;
  background-color: red;

  margin: 10px;
`;
const AboutPage = () => (
  <Layout>
    <SEO title="AboutPage" />

    <Box>hello</Box>
    <Box>hello</Box>
    <Box>hello</Box>
    <Box>hello</Box>

    <Box>hello</Box>
    <Box>hello</Box>
    <Box>hello</Box>
    <Box>1</Box>
  </Layout>
);

export default AboutPage;

// / want to create localhost:8000/
