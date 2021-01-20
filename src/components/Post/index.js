import React from 'react';
import { Link } from 'gatsby';
import { CardWrapper, Card, CardTitle, CardSubTitle, CardDate } from './style';
import PostInTags from './Post-in-tags';

const Post = ({ edges }) => {
  return (
    <>
      <CardWrapper>
        {edges.map(({ node }) => (
          <Card key={node.id}>
            <Link to={node.fields.slug}>
              <CardTitle>🚀{node.frontmatter.title}</CardTitle>
              <CardSubTitle>◼ {node.frontmatter.subtitle}</CardSubTitle>
            </Link>
            <PostInTags props={node.frontmatter.tags} />
            <CardDate>📆{node.frontmatter.date}</CardDate>
          </Card>
        ))}
      </CardWrapper>
    </>
  );
};

export default Post;
