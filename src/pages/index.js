import React, { useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import Sequence from '../components/Sequence';
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
  const ref = useRef();
  return (
    <Layout>
      <SEO title='Blog' description='welocome to Blog' lang='ko' />
      {/* 
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        natus sequi id quidem saepe cum quibusdam rem obcaecati, officia
        delectus repellat consequatur expedita possimus. Ipsam a quod hic sequi
        quibusdam.
      </p> */}
      <Banner />
      <Controller>
        <Scene duration='200%' triggerHook='onLeave' pin>
          {progress => (
            <div
              style={{
                objectFit: 'cover',
                height: '100vh',
                position: 'relative',
              }}
            >
              <Sequence ref={ref} progress={progress} />
            </div>
          )}
        </Scene>
      </Controller>
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
