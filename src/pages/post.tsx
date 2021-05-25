import React from 'react'
import { graphql, PageProps } from 'gatsby';

interface IDataProps {
  markdownRemark: {
    html: string
    fields: {
      slug: string
    }
    frontmatter: {
      title: string
    }
  }
}

const Post: React.FC<PageProps<IDataProps>> = ({ data }) => {
  const { markdownRemark } = data
  const { html } = markdownRemark
  return (
    <>
      <div
        dangerouslySetInnerHTML={{ __html: html }}>
      </div>
    </>
  )
}

export default Post

export const pageQuery = graphql`
  query BlogPostQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        title
        # date(formatString: "MMMM DD, YYYY")
      }
    } 
  }
`