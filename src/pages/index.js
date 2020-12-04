import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Layout from "../components/layout"
import Post from "../components/Post"
import SEO from "../components/seo"
import SideBar from "../components/Sidebar"
import Footer from "../components/Footer"
import { Row, Col } from "reactstrap"
import Tagslice from "../components/TagsSlice"
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>홈</h1>
      <Row>
        <Col md="8">
          <Tagslice />
          <StaticQuery
            query={indexQuery}
            render={data => {
              return (
                <div>
                  {data.allMarkdownRemark.edges.map(({ node }) => (
                    <Post
                      key={node.frontmatter.slug}
                      title={node.frontmatter.title}
                      slug={node.fields.slug}
                      date={node.frontmatter.date}
                      body={node.excerpt}
                      fluid={node.frontmatter.image.childImageSharp.fluid}
                      tags={node.frontmatter.tags}
                    />
                  ))}
                </div>
              )
            }}
          />
        </Col>
        <Col md="4">
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.4)",
            }}
          >
            <SideBar></SideBar>
          </div>
        </Col>
      </Row>
      <Footer />
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM Do YYYY")

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
`

export default IndexPage