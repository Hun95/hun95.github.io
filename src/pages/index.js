import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Category from '../components/Category';
import Layout from '../components/Layout';
import Post from '../components/Post';
import SEO from '../components/Seo';
import Submenu from '../components/Submenu';
import styled from 'styled-components';
import Banner from '../components/Banner';

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

  return (
    <Layout>
      <SEO title='Home' />
      <Banner />
      <Category edges={dataForm} />
      <Mainwrapper>
        <Post edges={dataForm} />
        <Submenu />
      </Mainwrapper>
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
