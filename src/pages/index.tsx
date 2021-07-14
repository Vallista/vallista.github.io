import React from "react"
import { graphql, PageProps } from "gatsby"

import PageTemplate from "../components/PageTemplate"
import Resume from '../components/Resume'
import Layout from "../components/Layout"
import SEO from '../components/seo'

const IndexPage: React.VFC<PageProps> = ({ data }) => {
  return (
    <>
      <SEO />
      <PageTemplate {...data as any}>
        <Layout id="index-content" justifyContent='center' overflow='auto' padding='0 48px'>
          <Layout flexDirection='column' width='auto' height='auto'>
            <Resume />
          </Layout>
        </Layout>
      </PageTemplate>
    </>
  )
}

export default IndexPage


export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark (
      sort: {fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { eq: false } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          published
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