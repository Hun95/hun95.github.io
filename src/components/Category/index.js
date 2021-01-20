import React from 'react';
import { Wrap, Button } from './style';
const Category = ({ edges, click }) => {
  return (
    <>
      <Wrap center>
        {edges.map((category, index) => {
          return (
            <Button key={index} onClick={() => click(category)}>
              {category}
            </Button>
          );
        })}
      </Wrap>
    </>
  );
};

export default Category;
