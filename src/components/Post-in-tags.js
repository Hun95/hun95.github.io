import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const PostInTags = ({ props }) => {
  return (
    <TagWrap>
      {props.map(tag => (
        <Tag to={`tag/${tag}`} key={tag}>
          {tag}
        </Tag>
      ))}
    </TagWrap>
  );
};

export default PostInTags;

const Tag = styled(Link)`
  background-color: #ffd42a;

  color: black;
  font-size: 10px;

  margin-right: 1rem;
  border: none;
  border-radius: 2rem;
  padding: 1% 1%;
  &:hover {
    background: #fff5cc;
  }
`;

const TagWrap = styled.div`
  margin-left: 30px;
`;
