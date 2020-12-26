import React from "react";

import Layout from "../components/Layout";
import Post from "../components/Post";
import SEO from "../components/Seo";
import Submenu from "../components/Submenu";
import styled from "styled-components";
import Banner from "../components/Banner";
const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <Banner />
    <Mainwrapper>
      <Post />
      <Submenu />
    </Mainwrapper>
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

const Mainwrapper = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;

  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
