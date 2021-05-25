/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
const {
  createFilePath
} = require("gatsby-source-filesystem")

exports.onCreateNode = ({
  node,
  actions,
  getNode
}) => {
  const {
    createNodeField
  } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({
      node,
      getNode
    })

    createNodeField({
      // Name of the field you are adding
      name: "slug",
      // Individual MDX node
      node,
      // Generated value based on filepath with "blog" prefix. you
      // don't need a separating "/" before the value because
      // createFilePath returns a path with the leading "/".
      value: `/posts${value}`,
    })
  }
}

// You can delete this file if you're not using it
exports.createPages = async function ({
  node,
  actions,
  graphql
}) {
  const result = await graphql(`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          html
          headings {
            depth
            value
          }
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }`)

  result.data.allMarkdownRemark.edges.forEach(edge => {
    const slug = edge.node.fields.slug
    actions.createPage({
      path: slug,
      component: require.resolve('./src/pages/post.tsx'),
      context: {
        id: edge.node.id
      }
    })
  })
}