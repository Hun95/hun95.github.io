import React from 'react';

/* Module */
import SEO from '../components/Seo';
import Layout from '../components/Layout/';
import Main from '../components/Main';
const IndexPage = () => {
  return (
    <Layout>
      <SEO title='Blog' description='welocome to Blog' lang='ko' />
      <Main />
    </Layout>
  );
};

export default IndexPage;
