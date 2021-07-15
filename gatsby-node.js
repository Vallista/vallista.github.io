/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
const {
  createFilePath
} = require("gatsby-source-filesystem")

const {
  GraphQLBoolean
} = require('gatsby/graphql')

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
  }
}

exports.setFieldsOnGraphQLNodeType = ({
  type
}) => {
  // if the node is a markdown file, add the `published` field
  if ('MarkdownRemark' === type.name) {
    return {
      published: {
        type: GraphQLBoolean,
        resolve: ({
          frontmatter
        }) => {
          /*
          `published` is always true in development
              so both drafts and finished posts are built
          */
          if (process.env.NODE_ENV === 'production') {
            return true
          }
          /*
          return the opposite of the `draft` value,
          i.e. if draft = true : published = false
          */
          return !frontmatter.draft
        },
      },
    }
  }
  return {}
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
            published
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

    if (!edge.node.published) return

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