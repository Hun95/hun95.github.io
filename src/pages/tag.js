import React from "react"

// Utilities
// import kebabCase from "lodash/kebabCase"

// Components
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

const TagsPage = ({
  data: {
    allMarkdownRemark: { group, edges },
    site: {
      siteMetadata: { title },
    },
  },
}) => {
  const changeFilter = () => {
    //만약 tag.fieldValue 값이 === frontmatter.tag에 있으면
    //frontmatter.tag가 소속한 frontmatter.title 의 문서를 불러온다.
    console.log(taggg)
    console.log(textTitle)
    // console.log(textTitle[1].tags[0])

    if (result[0] === taggg[0]) {
      return
    }
  }

  let count = 0
  const textTitle = edges.map(nodes => nodes.node.frontmatter)
  const taggg = group.map(tag => tag.fieldValue)
  const result = textTitle.reduce((accumulator, item) => {
    return {
      ...accumulator,
      [item.title]: item.tags,
    }
  }, {})
  console.log(result)

  return (
    <div>
      <Helmet title={title} />
      <div>
        <h1>Tags</h1>
        <div></div>
        <ul>
          {group.map(tag => (
            <li key={tag.fieldValue}>
              <button onClick={result} style={{ backgroundColor: "red" }}>
                {tag.fieldValue} ({tag.totalCount})
              </button>
            </li>
          ))}
        </ul>

        <ul>{taggg[1]}</ul>
        <ul>{textTitle[1].title}</ul>
      </div>
    </div>
  )
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      edges {
        node {
          frontmatter {
            title
            tags
          }
        }
      }
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
