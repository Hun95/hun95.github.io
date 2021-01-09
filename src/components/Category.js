import React, { useState, useEffect } from 'react';
import Post from '../components/Post';
const getTags = items => {
  let tempItems = items.map(items => {
    return items.node.frontmatter.category;
  });
  let newtagsArray = new Set(tempItems);
  let categories = Array.from(newtagsArray);
  categories = ['all', ...categories];
  return categories;
};

const Category = ({ edges }) => {
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
        ({ node }) => node.frontmatter.category === category
      );
      console.log(2);
      setNode(items);
    }
  };
  return (
    <div>
      {category.map((category, index) => {
        return (
          <button key={index} onClick={() => handleItems(category)}>
            {category}
          </button>
        );
      })}
      <Post edges={node} />
    </div>
  );
};

export default Category;
