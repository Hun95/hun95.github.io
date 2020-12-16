import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Layout from "../components/layout";
import Post from "../components/Post";
import SEO from "../components/seo";
// import SideBar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Row, Col } from "reactstrap";
import { HeroContainer, HeroContent } from "../styles/Styled";
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>홈</h1>
    <Row>
      <Col md="12">
        <Post />
      </Col>
      <Col md="4">
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
        >
          {/* <SideBar></SideBar> */}
        </div>

        <HeroContainer>
          <HeroContent>hello</HeroContent>
        </HeroContainer>
        <Footer />
      </Col>
    </Row>
  </Layout>
);

const indexQuery = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          body
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
`;

export default IndexPage;
