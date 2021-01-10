import React from 'react';
import { graphql } from 'gatsby';
import Submenu from '../components/Submenu';
import Layout from '../components/Layout';

import { DiscussionEmbed } from 'disqus-react';
import styled from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
const BlogPostTemplate = ({ data, location }) => {
  const post = data.mdx;
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  const disqusShortname = 'hun95';
  const baseUrl = 'https://hun95.github.io';
  const disqusConfig = {
    identifier: data.mdx.id,
    title: post.title,
    url: baseUrl,
  };

  return (
    <Layout location={location} title={siteTitle}>
      <BlogLayout>
        <MDXpage>
          <HeadWrap>
            <Title>{post.frontmatter.title}</Title>
            <Sub>🤏 by 수염난친구</Sub>
            <Sub>📆 {post.frontmatter.date}</Sub>
          </HeadWrap>
          <hr></hr>
          <MDXRenderer>{post.body}</MDXRenderer>
        </MDXpage>
        <Submenu></Submenu>
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </BlogLayout>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)

      body
      tableOfContents
      frontmatter {
        title
        subtitle
        date(formatString: "YYYY년 MM월 DD일")

        tags
        # image {
        #   childImageSharp {
        #     fluid(maxWidth: 600) {
        #       ...GatsbyImageSharpFluid
        #     }
        #   }
        # }
      }
    }
  }
`;

const BlogLayout = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  hr {
    margin: 5rem 0;
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MDXpage = styled.div`
  padding: 2rem;
  background-color: #fff;

  @media only screen and (max-width: 768px) {
    padding: 0rem;
    margin: 0 1rem;
  }
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 3rem;
  padding: 0;
`;

const Sub = styled.p`
  margin: 0 2rem;
  padding: 0;
`;

const HeadWrap = styled.section``;
