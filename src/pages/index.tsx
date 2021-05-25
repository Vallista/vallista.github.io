import * as React from "react"
import { Link, graphql, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

interface IDataProps {
  allMarkdownRemark: {
    edges: Array<{
      node: {
        fields: {
          slug: string
        },
        frontmatter: {
          title: string
          date: string
        }
      }
    }>
  }
}

const IndexPage: React.VFC<PageProps<IDataProps>> = ({ data }) => {
  const { allMarkdownRemark } = data
  const { edges } = allMarkdownRemark

  return (
    <div>
      <ul>
        {
          edges.map(({ node }, index) => (
            <li key={index}>
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default IndexPage


export const pageQuery = graphql`
  query BlogIndexQuery{
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
`