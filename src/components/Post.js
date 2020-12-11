import React from "react";
import { Link } from "gatsby";
import {
  Card,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
  Badge,
} from "reactstrap";
import Img from "gatsby-image";

const Post = ({ title, slug, date, body, fluid, tags }) => {
  return (
    <Card>
      <Link to={slug}>
        <Img className="card-image-top" fluid={fluid} />
      </Link>
      <CardBody>
        <Link to={slug}>
          <CardTitle>{title}</CardTitle>
        </Link>
        <CardSubtitle>
          <span className="text-info">{date}</span> by{" "}
        </CardSubtitle>

        <CardText>{body}</CardText>
        <ul className="post-tags">
          {tags.map(tag => (
            <li>
              <Link to={`/tag/${tag}`}>
                <Badge color="primary" className="text-uppercase">
                  {tag}
                </Badge>
              </Link>
            </li>
          ))}
        </ul>
        <Link to={slug} className="btn btn-outline-primary float-right">
          Read More
        </Link>
      </CardBody>
    </Card>
  );
};

export default Post;
