import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { GlobalStyle } from '../Global/GlobalStyles';
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
      <Link
        rel='canonical'
        content='https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js'
      />
      <Link
        rel='canonical'
        content='https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/animation.gsap.js'
      />
      <Link
        rel='canonical'
        content='https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/debug.addIndicators.js'
      />
      <Link
        rel='canonical'
        content='https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js'
      />

      <Nav siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;

const Main = styled.div`
  padding: 0.5rem calc((100vw - 970px) / 2);
`;
