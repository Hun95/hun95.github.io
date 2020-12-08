import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";
import { Form, FormGroup, Input, Card, CardTitle, CardBody } from "reactstrap";
import Img from "gatsby-image";
const SideBar = () => (
  <div>
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase mb-3">
          뉴스레터
        </CardTitle>
        <Form className="text-center">
          <FormGroup>
            <Input type="email" name="email" placeholder="Your Email" />
          </FormGroup>
          <button className="btn btn-outline-success text-uppercase">
            구독
          </button>
        </Form>
      </CardBody>
    </Card>

    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase">광고</CardTitle>
        <img
          src="https://via.placeholder.com/320x200"
          alt="Advert"
          style={{ width: "100%" }}
        />
      </CardBody>
    </Card>

    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase">최신글</CardTitle>
        <StaticQuery
          query={sidebarQuery}
          render={data => {
            return (
              <div>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                  <Card key={node.id}>
                    <Link to={node.fields.slug}>
                      <Img
                        className="card-image-top"
                        fluid={node.frontmatter.image.childImageSharp.fluid}
                      />
                    </Link>
                    <CardBody>
                      <CardTitle>
                        <Link to={node.fields.slug}>
                          {node.frontmatter.title}
                        </Link>
                      </CardTitle>
                    </CardBody>
                  </Card>
                ))}
              </div>
            );
          }}
        />
      </CardBody>
    </Card>
  </div>
);

const sidebarQuery = graphql`
  query sidebarQuery {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 3) {
      edges {
        node {
          id
          slug
          frontmatter {
            title

            image {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default SideBar;
