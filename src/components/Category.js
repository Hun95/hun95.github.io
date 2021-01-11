import React from 'react';
import styled from 'styled-components';
const Category = ({ edges, click }) => {
  return (
    <>
      <Wrap>
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

const Button = styled.button`
  background-color: #ffd42a;
  color: black;
  font-size: 15px;
  margin-right: 1rem;
  border: none;
  border-radius: 2rem;
  padding: 1% 1%;

  text-align: center;
  min-width: 4rem;

  &:hover {
    background: #fff5cc;
  }
`;
const Wrap = styled.div`
  margin-bottom: 2rem;
  background: #fafafa;

  padding: 1rem;

  text-align: left;
  border: 2px solid #e6e6e6;
  border-radius: 1rem;
  overflow-x: auto;
  display: flex;
  flex-direction: row;

  &::-webkit-scrollbar {
    display: none !important;
  }
`;
