/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import Banner from '../components/Banner';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Header from './Header';
import { GlobalStyle } from './styles/GlobalStyles';
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

      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;

const Main = styled.div`
  padding: 0.5rem calc((100vw - 970px) / 2);
`;
