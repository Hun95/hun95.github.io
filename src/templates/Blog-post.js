import React from "react";
import { graphql } from "gatsby";
// import Sidebar from "../components/Sidebar";
import TableOfContents from "../components/Tabel-of-contents";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { Badge, CardBody, CardSubtitle, Card, Row, Col } from "reactstrap";
import { DiscussionEmbed } from "disqus-react";

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
      <h1>{post.frontmatter.title}</h1>

      <Row>
        <Col md="8">
          <Card>
            <Img
              className="card-image-top"
              fluid={post.frontmatter.image.childImageSharp.fluid}
            />
            <CardBody>
              <CardSubtitle>
                <span className="text-info">{post.date}</span>
                <span className="text-info">{post.date}</span>
              </CardSubtitle>
              <MDXRenderer>{post.body}</MDXRenderer>

              <ul className="post-tags">
                {post.frontmatter.tags.map(tag => (
                  <li key={tag}>
                    <Link to={`../../tag/${tag}`}>
                      <Badge color="primary">{tag}</Badge>
                    </Link>
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
          <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </Col>

        <Col md="4">
          {/* <Sidebar /> */}
          <Card className="toc">
            <TableOfContents items={post.tableOfContents.items} />
          </Card>
        </Col>
      </Row>
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
