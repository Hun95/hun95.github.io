import React from "react";

import Layout from "../components/Layout";
import Post from "../components/Post";
import SEO from "../components/Seo";
// import SideBar from "../components/Sidebar";
import styled from "styled-components";
import Banner from "../components/Banner";
const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <Banner />
    <Mainwrapper>
      <Post />
      <SubmenuWrap>
        <Submenu>hi</Submenu>
      </SubmenuWrap>
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

const SubmenuWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  margin-left: 1rem;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const Submenu = styled.div`
  position: sticky;
  overflow: auto;
  top: 0;

  bottom: 0;
  left: 0;
  right: 0;
  background: blue;
  height: 50px;
`;
const Mainwrapper = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;

  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
