import React from "react";

import Layout from "../components/Layout";
import Post from "../components/Post";
import SEO from "../components/Seo";
// import SideBar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Row, Col } from "reactstrap";
import { HeroContainer, HeroContent } from "../components/styles/Styled";
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quo sequi
      eaque mollitia id at ipsam illo et autem. Dolore tempora corporis eius
      similique odit iusto quisquam cupiditate velit neque.
    </h1>

    <Post />
    <HeroContainer>
      <HeroContent>hello</HeroContent>
    </HeroContainer>
    <Footer />
  </Layout>
);

// const indexQuery = graphql`
//   query {
//     allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
//       edges {
//         node {
//           id
//           body
//           frontmatter {
//             title
//             date(formatString: "MMM Do YYYY")

//             tags
//             image {
//               childImageSharp {
//                 fluid(maxWidth: 600) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//           fields {
//             slug
//           }
//           excerpt
//         }
//       }
//     }
//   }
// `;

export default IndexPage;
