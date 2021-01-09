import React, { useState, useEffect } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import styled from 'styled-components';
import PostInTags from '../components/Post-in-tags';
const getTags = items => {
  let tempItems = items.map(items => {
    return items.node.frontmatter.tags;
  });
  let newtagsArray = new Set(tempItems);
  let categories = Array.from(newtagsArray);
  categories = ['all', ...categories];
  return categories;
};
const Post = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            id

            frontmatter {
              title
              subtitle
              date(formatString: "YYYY년 MM월 DD일")
              tags
              # image {
              #   childImageSharp {
              #     fluid(maxWidth: 600) {
              #       ...GatsbyImageSharpFluid
              #     }
              #   }
              # }
            }
            fields {
              slug
            }
            excerpt
          }
        }
      }
    }
  `);

  const edges = data.allMdx.edges;

  const [node, setNode] = useState(edges);
  const [category, setCategory] = useState(getTags(node));
  const handleItems = category => {
    let tempItems = [...edges];
    console.log(tempItems);
    if (category === 'all') {
      setNode(tempItems);
      console.log('hi');
    } else {
      let items = tempItems.filter(
        ({ node }) => node.frontmatter.tags === category
      );
      setNode(items);
    }
  };

  return (
    <>
      <CardWrapper>
        {node.map(({ node }) => (
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
      <div>
        {category.map((category, index) => {
          return (
            <button key={index} onClick={() => handleItems(category)}>
              {category}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Post;
const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  grid-gap: 1rem;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  max-width: 100%;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const Card = styled.section`
  background: #ffffff;
  display: grid;
  grid-template-columns: repeat(2fr, 500px);

  border-radius: 0 0 5px 5px;
  box-shadow: 0 20px 10px -15px rgba(197, 192, 249, 0.2);
  position: relative;
  z-index: 0;
  height: 250px;
  width: 100%;

  &:hover {
    transition: all 0.3s ease-in-out;
    transform: translateY(-5px);
  }
`;

const CardTitle = styled.h2`
  margin-top: 1.4rem;
  margin-bottom: 1rem;
  text-align: left;
  line-height: 2rem;
  margin-left: 10px;
  height: 30px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  cursor: pointer;
  -webkit-box-orient: vertical;
  overflow: hidden;

  font-weight: bold;
`;

const CardSubTitle = styled.p`
  margin-top: 20px;
  text-align: left;
  font-size: 10px;
  height: 30px;
  cursor: pointer;
  margin-left: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 2;

  -webkit-box-orient: vertical;
  overflow: hidden;
  padding-right: 10px;
`;

const CardDate = styled.p`
  font-size: 5px;
  text-align: right;
  margin-right: 10px;
  margin-top: 20px;
`;
