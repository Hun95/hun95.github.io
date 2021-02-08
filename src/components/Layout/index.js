import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { GlobalStyle } from '../Global/GlobalStyles';
import '../Global/reset.css';
import Nav from '../Nav/';
import { Link } from 'react-head';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyle />

      {/* <Nav siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <Main>{children}</Main>
    </>
  );
};

export default Layout;

const Main = styled.div``;
