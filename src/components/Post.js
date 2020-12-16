import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { Card, CardTitle, CardText, CardSubtitle, CardBody } from "reactstrap";
import Img from "gatsby-image";
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
          <Link to={node.fields.slug}>
            <Img
              className="card-image-top"
              fluid={node.frontmatter.image.childImageSharp.fluid}
            />
          </Link>
          <CardBody>
            <Link to={node.fields.slug}>
              <CardTitle>{node.frontmatter.title}</CardTitle>
            </Link>
            <CardSubtitle>
              <span className="text-info">{node.frontmatter.date}</span>
            </CardSubtitle>

            <CardText>{node.excerpt}</CardText>

            <Link
              to={node.fields.slug}
              className="btn btn-outline-primary float-right"
            >
              Read More
            </Link>
          </CardBody>
          <PostInTags props={node.frontmatter.tags} />
        </Card>
      ))}
    </>
  );
};

export default Post;
