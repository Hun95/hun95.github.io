import React from 'react';
import Layout from '../components/Layout/';
import SEO from '../components/Seo';
import Post from '../components/Post/';
import Category from '../components/Category';
import useCategory from '../hooks/useCategory';
import { useStaticQuery, graphql } from 'gatsby';
const Blog = () => {
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
  const { category, node, handleItems } = useCategory(dataForm);
  return (
    <Layout>
      <SEO title='Blog' description='welocome to Blog' lang='ko' />
      <Category edges={category} click={handleItems} />
      준비중..
      {/* <Post edges={node} /> */}
    </Layout>
  );
};

export default Blog;
