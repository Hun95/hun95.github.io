import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Categories = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `);

  const edges = data.allMdx.edges;
  const tagsArray = edges.map(({ node }) => node.frontmatter.tags);
  const array = tagsArray.join().split(',');
  const category = ['all', ...new Set(array)];
  const [categories, setCate] = useState(category);
  console.log(tagsArray);
  const filterItems = () => {
    if (categories === ['javascript']) {
      console.log('hello');
    }
  };

  return (
    <div>
      {categories.map(categories => (
        <li key={categories}>
          <button onClick={filterItems} name={categories}>
            {categories}
          </button>
        </li>
      ))}
    </div>
  );
};

export default Categories;
