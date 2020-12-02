import React from "react"
import { graphql } from "gatsby"
import Sidebar from "../components/Sidebar"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Badge, CardBody, CardSubtitle, Card, Row, Col } from "reactstrap"
const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`

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
              <div
                dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
              />
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
        </Col>

        <Col md="4">
          <Sidebar />
        </Col>
      </Row>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY년 MM월 DD일")
        description
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
`
