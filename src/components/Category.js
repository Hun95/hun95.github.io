import React from 'react';
import styled from 'styled-components';
const Category = ({ edges, click }) => {
  return (
    <Wrap>
      {edges.map((category, index) => {
        return (
          <Button key={index} onClick={() => click(category)}>
            {category}
          </Button>
        );
      })}
    </Wrap>
  );
};

export default Category;

const Button = styled.button`
  background-color: #ffd42a;
  color: black;
  font-size: 15px;
  margin-right: 1rem;
  border: none;
  border-radius: 2rem;
  padding: 1% 1%;
  &:hover {
    background: #fff5cc;
  }
`;
const Wrap = styled.div`
  margin-bottom: 2rem;
`;
