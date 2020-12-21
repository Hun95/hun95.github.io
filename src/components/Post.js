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
      {edges.map(({ node }) => (
        <Card>
          <CardTitle>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          </CardTitle>

          <span className="text-info">{node.frontmatter.date}</span>

          {node.excerpt}

          <PostInTags props={node.frontmatter.tags} />
        </Card>
      ))}
    </>
  );
};

export default Post;

const Card = styled.div`
  border: 1px solid gray;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  max-width: calc(100vh - 40px);
  min-height: calc(100vh -500px);
`;

const CardTitle = styled.div`
  margin-bottom: 1rem;

  font-size: 30px;
  font-weight: bold;
`;
