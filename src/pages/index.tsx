import React from "react"
import { graphql, PageProps } from "gatsby"
import PageTemplate from "../components/PageTemplate"
import Resume from '../components/Resume'
import Layout from "../components/Layout"
import { Color } from "../utils"

const IndexPage: React.VFC<PageProps> = ({ data }) => {
  return (
    <PageTemplate {...data as any}>
      <Layout justifyContent='center' overflow='auto' padding='0 48px'>
        <Layout flexDirection='column' width='auto' height='auto' backgroundColor={Color.GRAY_900}>
          <Resume />
        </Layout>
      </Layout>
    </PageTemplate>
  )
}

export default IndexPage


export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(
      sort: {fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { eq: false } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date
            tags
            image {
              relativePath
              relativeDirectory
              root
              sourceInstanceName
              publicURL
            }
          }
          html
        }
      }
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`