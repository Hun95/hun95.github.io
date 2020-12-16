import React from "react";
import { Link } from "gatsby";
const PostInTags = ({ props }) => {
  return (
    <div>
      {props.map(tag => (
        <Link to={`tag/${tag}`}>
          <div>{tag}</div>
        </Link>
      ))}
    </div>
  );
};

export default PostInTags;
