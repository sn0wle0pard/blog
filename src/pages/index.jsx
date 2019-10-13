import React from 'react'
import { graphql } from 'gatsby'

import Page from '../components/Page'
import ArticleListItem from '../components/ArticleListItem'

export const query = graphql`
{
  allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
    edges {
      node {
        timeToRead
        fields {
          slug
        }
        excerpt
        frontmatter {
          date(formatString: "YYYY-MM-DD")
          title
          thumbnail {
            url {
              publicURL
            }
            contain
          }
        }
      }
    }
  }
}
`

function IndexPage({ data: { allMarkdownRemark: { edges } } }) {
  return (
    <Page
      title="Han Lee"
      ogTitle="Han Lee"
      ogDescription="이한의 개발 블로그"
    >
      {edges.map(({ node }, index) => (
        <ArticleListItem
          key={index}
          to={node.fields.slug}
          date={node.frontmatter.date}
          title={node.frontmatter.title}
          timeToRead={node.timeToRead}
          description={node.excerpt}
          thumbnail={node.frontmatter.thumbnail}
        />
      ))}
    </Page>
  )
}

export default IndexPage
