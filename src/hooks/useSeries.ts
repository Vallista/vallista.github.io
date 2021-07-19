import React from 'react'

interface Props {
  allMarkdownRemark: {
    edges: {
      node: {
        fields: {
          slug: string
        }
        timeToRead: number
        frontmatter: {
          series: string
          seriesPriority: number
          date: string
          title: string
        }
      }
    }[]
  }
  markdownRemark?: {
    frontmatter: {
      series: string
    }
  }
}

function useSeries(props: Props) {
  const {
    allMarkdownRemark,
    markdownRemark,
  } = props

  if (!markdownRemark || !markdownRemark.frontmatter.series) return {
    title: '',
    posts: []
  }

  const series = allMarkdownRemark.edges
    .filter((it) => it.node.frontmatter.series === markdownRemark.frontmatter.series)
    .map((it) => ({
      title: it.node.frontmatter.title,
      name: it.node.fields.slug,
      priority: it.node.frontmatter.seriesPriority,
      date: it.node.frontmatter.date,
      readTime: it.node.timeToRead
    }))
    .sort((a, b) => a.priority > b.priority ? -1 : 1)

  return {
    title: markdownRemark.frontmatter.series,
    posts: series,
    hasSeries: series.length > 0
  }
}

export default useSeries
