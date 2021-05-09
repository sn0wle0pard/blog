import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../components/Layout'
import { Talk } from '../components/Talk'
import Post from '../components/Post'

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            youtube_id
            conference
            summary
          }
          fields {
            category
          }
        }
      }
    }
  }
`

interface Props {
  data: {
    allMdx: {
      edges: {
        node: {
          id: string
          frontmatter: {
            title: string
            date: string
            youtube_id: string
            conference: string
            summary: string
          }
          fields: {
            category: 'posts' | 'talks'
          }
        }
      }[]
    }
  }
}

export default function Main({ data: { allMdx } }: Props) {
  return (
    <Layout>
      <div></div>
      <section>
        {allMdx.edges.map(({ node }) => {
          if (node.fields.category === 'posts') {
            return (
              <Post
                key={node.id}
                date={node.frontmatter.date}
                title={node.frontmatter.title}
                summary={node.frontmatter.summary}
              />
            )
          }
          return (
            <Talk
              key={node.id}
              date={node.frontmatter.date}
              title={node.frontmatter.title}
              youtubeId={node.frontmatter.youtube_id}
              conference={node.frontmatter.conference}
            />
          )
        })}
      </section>
    </Layout>
  )
}
