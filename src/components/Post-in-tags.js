import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
const PostInTags = ({ props }) => {
  return (
    <div>
      {props.map(tag => (
        <Tag to={`tag/${tag}`}>{tag}</Tag>
      ))}
    </div>
  );
};

export default PostInTags;

const Tag = styled(Link)`
  background-color: blue;

  color: white;

  margin-right: 1rem;
  border: none;
  border-radius: 2rem;
  padding: 1% 1%;
`;
