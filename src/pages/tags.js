import { graphql } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import { Badge } from "reactstrap"
import SEO from "../components/seo"

const TagsPage = () => (
  <Layout>
    <SEO title="TagsPage" />
    <h1>태그</h1>
    <ul>
      {markdownRemark.edges.node.frontmatter.map(tag => (
        <li key={tag}>
          <Badge color="primary">{tag}</Badge>
        </li>
      ))}
    </ul>
  </Layout>
)

export default TagsPage
const TagsPageQuery = graphql`
      markdownRemark {
        edges{
          node{
            frontmatter {
        
        tags
   
      }
    }
          }
        }
     
    
`

// / want to create localhost:8000/
