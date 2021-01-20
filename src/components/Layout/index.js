import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { GlobalStyle } from '../Global/GlobalStyles';
import Nav from '../Nav/';

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
      <Nav siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;

const Main = styled.div`
  padding: 0.5rem calc((100vw - 970px) / 2);
`;
