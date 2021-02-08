import { useState } from 'react';
const getTags = items => {
  let tempItems = items.map(items => {
    return items.node.frontmatter.category;
  });
  let newtagsArray = new Set(tempItems);
  let categories = Array.from(newtagsArray);
  categories = ['All', ...categories];
  return categories;
};

const useCategory = initValue => {
  const [node, setNode] = useState(initValue);
  const [category, setCategory] = useState(getTags(node));

  const handleItems = category => {
    let tempItems = [...initValue];

    if (category === 'All') {
      setNode(tempItems);
    } else {
      let items = tempItems.filter(
        ({ node }) => node.frontmatter.category === category
      );
      setNode(items);
    }
  };
  return { handleItems, category, node };
};
export default useCategory;
