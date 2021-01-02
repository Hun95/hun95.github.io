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

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MDXpage = styled.div`
  padding: 2rem;
  background-color: #fff;
  font-family: GmarketSansMedium;
  font-size: 14px;
  @media only screen and (max-width: 768px) {
    padding: 0rem;
    margin: 0 1rem;
  }
`;
