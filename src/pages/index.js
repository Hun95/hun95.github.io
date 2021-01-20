import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

/* Module */
import SEO from '../components/Seo';
import Layout from '../components/Layout/';
import Banner from '../components/Banner/';
// import useCategory from '../hooks/useCategory';
import Nav from '../components/Nav/';
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            id
            body
            frontmatter {
              title
              subtitle
              date(formatString: "MMM Do YYYY")
              category
              tags
            }
            fields {
              slug
            }
            excerpt
          }
        }
      }
    }
  `);
  const dataForm = data.allMdx.edges;
  // const { category, node, handleItems } = useCategory(dataForm);

  return (
    <Layout>
      <SEO title='Blog' description='welocome to Blog' lang='ko' />
      <Banner />

      {/* <CateWrapper>
        <Category edges={category} click={handleItems} />
      </CateWrapper>
      <Mainwrapper>
        <Post edges={node} />
        <Submenu />
      </Mainwrapper> */}
    </Layout>
  );
};

export default IndexPage;

const Mainwrapper = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;

  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CateWrapper = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
