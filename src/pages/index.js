import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

/* Module */
import SEO from '../components/Seo';
import Layout from '../components/Layout/';
import Banner from '../components/Banner/';
import Hero from '../components/Hero/';
import VideoSection from '../components/VideoSection';
import { Controller, Scene } from 'react-scrollmagic';
import Sequence from '../components/Sequence';
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
      <VideoSection />
      <Controller style={{ position: 'relative', zIndex: '2' }}>
        <Scene duration='400%' triggerHook='onLeave' pin>
          {progress => (
            <div style={{ height: '100vh', position: 'relative', zIndex: '2' }}>
              <Sequence ref={ref} progress={progress} />
            </div>
          )}
        </Scene>
      </Controller>
      <Banner />
      <Hero />
    </Layout>
  );
};

export default IndexPage;
