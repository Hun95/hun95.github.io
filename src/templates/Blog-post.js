import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import TableOfContents from "../components/Tabel-of-contents";
import { DiscussionEmbed } from "disqus-react";
import styled from "styled-components";
import { MDXRenderer } from "gatsby-plugin-mdx";
const BlogPostTemplate = ({ data, location }) => {
  const post = data.mdx;
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  const disqusShortname = "hun95";
  const baseUrl = "https://hun95.github.io";
  const disqusConfig = {
    identifier: data.mdx.id,
    title: post.title,
    url: baseUrl,
  };

  return (
    <Layout location={location} title={siteTitle}>
      <BlogLayout>
        <MDXRenderer>{post.body}</MDXRenderer>
      </BlogLayout>
      {/* <TableLayout>
        <TableOfContents items={post.tableOfContents.items} />
      </TableLayout> */}
      <div>{post.tableOfContents.items.url}</div>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
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
        date(formatString: "YYYY년 MM월 DD일")

        tags
        image {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

const BlogLayout = styled.div`
  line-height: 200%;
  justify-content: center;
  transform: translate(10px);
  padding: 50px 0;

  @media screen and (max-width: 768px) {
    transform: none;
  }
`;

const TableLayout = styled.div`
  width: 10%;
  display: inline-flex;
  right: 100px;
  top: 0;
  position: absolute;
`;
