import React from 'react';
import { Tag, TagWrap } from './style';
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
