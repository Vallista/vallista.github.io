/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
const {
  createFilePath
} = require("gatsby-source-filesystem")

// const fs = require('fs')
// const path = require('path')

// exports.createSchemaCustomization = ({
//   actions
// }) => {
//   const {
//     createTypes
//   } = actions

//   createTypes(`
//     type MarkdownRemark implements Node {
//       frontmatter: Frontmatter!
//     }

//     type Frontmatter {
//       title: String!
//     }
//   `)
// }

exports.onCreateNode = async ({
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
      // Individual MDX node
      node,
      // Name of the field you are adding
      name: "slug",
      // Generated value based on filepath with "blog" prefix. you
      // don't need a separating "/" before the value because
      // createFilePath returns a path with the leading "/".
      value: `${value}`,
    })

    // console.log(node)
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
      allMarkdownRemark(
        sort: { fields: [frontmatter___date, id], order: DESC }
        limit: 1000
      ) {
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
              date
              draft
            }
          }
        }
      }
    }
  `)

  const getTime = (date) => {
    const translate = date.split(/[\-\+ :T]/)
    return [translate[0] || 0, translate[1] || 0, translate[2] || 0]
  }

  result.data.allMarkdownRemark.edges.forEach(edge => {
    const [year, month, day] = getTime(edge.node.frontmatter.date)

    const slug = `/${year}/${month}/${day}${edge.node.fields.slug}`.slice(0, -1)

    actions.createPage({
      path: slug,
      component: require.resolve('./src/pages/post.tsx'),
      context: {
        id: edge.node.id,
        slug
      }
    })
  })

  actions.createPage({
    path: '/resume',
    component: require.resolve('./src/pages/index.tsx'),
    context: {
      slug: '/resume'
    }
  })
}