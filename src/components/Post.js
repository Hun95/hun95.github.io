import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import styled from "styled-components";
import PostInTags from "../components/Post-in-tags";
const Post = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            id

            frontmatter {
              title
              subtitle
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
            fields {
              slug
            }
            excerpt
          }
        }
      }
    }
  `);

  const edges = data.allMdx.edges;

  return (
    <>
      <CardWrapper>
        {edges.map(({ node }) => (
          <Card>
            <CardTitle>
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            </CardTitle>
            <CardSubTitle>{node.frontmatter.subtitle}</CardSubTitle>
            <span className='text-info'>{node.frontmatter.date}</span>

            <PostInTags props={node.frontmatter.tags} />
          </Card>
        ))}
      </CardWrapper>
    </>
  );
};

export default Post;
const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  grid-gap: 1rem;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const Card = styled.section`
  background: #ffffff;
  border-radius: 0 0 5px 5px;
  box-shadow: 0 20px 10px -15px rgba(197, 192, 249, 0.2);
  position: relative;
  z-index: 0;
  height: 250px;
  max-width: 100%;
  max-height: 100%;
`;

const CardTitle = styled.p`
  margin-top: 1.4rem;
  margin-bottom: 1rem;
  text-align: center;
  font-size: 20px;
  padding: 0 30px;
  height: 28px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;

  font-weight: bold;

  a {
    color: black;
  }
  &:hover {
  }
`;

const CardSubTitle = styled.p`
  margin-left: 5%;
  height: 28px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-align: left;
`;
