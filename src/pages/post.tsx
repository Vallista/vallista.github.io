import React, { useMemo } from 'react'
import { graphql, Link, PageProps } from 'gatsby';
import { Disqus } from 'gatsby-plugin-disqus'
import styled from 'styled-components';

import SEO from '../components/seo'
import PageTemplate from '../components/PageTemplate';
import Layout from '../components/Layout';
import { Color, MAXIMUM_WIDTH, toDate } from '../utils';
import { useLocation } from '@reach/router';

interface IDataProps {
  allMarkdownRemark: {
    edges: Array<{
      node: {
        excerpt: string
        fields: {
          slug: string
        },
        frontmatter: {
          title: string
          date: string
          category: string
          tags: string[]
          image?: {
            publicURL: string
          }
        }
      }
    }>
    group: Array<{ fieldValue: string; totalCount: number }>
  }
  markdownRemark: {
    html: string
    fields: {
      slug: string
    }
    excerpt: string
    timeToRead: number
    headings: {
      id: string
      value: string
      depth: number
    }[]
    frontmatter: {
      title: string
      date: string
      category: string
      tags: string[]
      image?: {
        publicURL: string
      }
    }
  }
}

const PostHeader = styled.header<{ backgroundImage: string }>`
  width: 100%;
  max-width: ${MAXIMUM_WIDTH}px;
  min-height: 240px;
  height: auto;
  color: ${Color.GRAY_400};
  padding: 24px 50px;
  border-bottom: 1px solid #e2e8f0;
  background-color: ${Color.GRAY_900};

  ${(props) => props.backgroundImage ? `
  position: relative;
  background-image: url(${props.backgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1;
  }

  & > div {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 2;
    display: flex;
    flex-direction: column;

    & > h1 {
      color: ${Color.GRAY_900};
    }

    & > p {
      color: ${Color.GRAY_600};
    }
  }
  `: ``}
`

const PostContents = styled.section`
  width: 100%;
  max-width: ${MAXIMUM_WIDTH}px;
  height: auto;
  box-sizing: border-box;
  padding: 24px 50px;
`

const Tags = styled.div``

const Tag = styled.span`
  width: auto;
  background-color: ${Color.PURPLE_200};
  border-radius: 12px;
  padding: 2px 8px 3px;
  margin-right: 6px;
  margin-bottom: 6px;
  display: inline-block;
  color: ${Color.GRAY_900};
  font-weight: 600;
  font-size: 0.8rem;
`

const PostHeaderText = styled.h1`
  margin-top: 0.5rem;
  margin-bottom: 1.2rem;
`

const Post: React.VFC<PageProps<IDataProps>> = ({ data }) => {
  const { markdownRemark } = data
  const { html, frontmatter } = markdownRemark
  const { title, date, image, tags } = frontmatter
  const { pathname } = useLocation()

  const translateDateFormat = useMemo(() => toDate(date), [date])
  const year = translateDateFormat.getFullYear()
  const month = (translateDateFormat.getMonth() + 1).toString().padStart(2, '0')
  const day = translateDateFormat.getDate().toString().padStart(2, '0')

  const disqusConfig = {
    url: `https://vallista.kr${pathname}`,
    identifier: markdownRemark.fields.slug,
    title: markdownRemark.frontmatter.title,
  }

  return (
    <>
      <SEO title={markdownRemark.frontmatter.title} description={markdownRemark.excerpt} article={markdownRemark.html} />
      <PageTemplate {...data}>
        <Layout justifyContent='center' overflow='auto' padding='0 48px' scrollBehavior='smooth' id='contents'>
          <Layout flexDirection='column' width='auto' height='auto' backgroundColor={Color.GRAY_900} maxWidth={`${MAXIMUM_WIDTH}px`} id='content'>
            <PostHeader id='post-header' backgroundImage={image?.publicURL}>
              <div>
                <PostHeaderText>{title}</PostHeaderText>
                <p style={{ marginTop: '6px', marginBottom: '0' }}>{year}.{month}.{day} - <Link to='/' style={{ fontWeight: 600 }}>@Vallista</Link></p>
                <p style={{ marginTop: '-2px' }}>읽는데 약 {markdownRemark.timeToRead}분 걸려요!</p>
                <Tags>
                  {tags.map((it, index) => (
                    <Tag key={index}>
                      {it}
                    </Tag>
                  ))}
                </Tags>
              </div>
            </PostHeader>
            <PostContents id="post-contents">
              <div dangerouslySetInnerHTML={{ __html: html }} />
              <hr style={{ marginTop: '36px' }} />
              <div style={{ marginTop: '36px' }}>
                <Disqus config={disqusConfig} />
              </div>
            </PostContents>
            <div style={{ paddingBottom: '30vh' }} />
          </Layout>
        </Layout>
      </PageTemplate>
    </>
  )
}

export default Post

// const isDraft = process.env.DRAFT === 'true'
// filter: { frontmatter: { draft: { eq: false } } }

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    allMarkdownRemark(
      sort: {fields: [frontmatter___date], order: DESC }
      filter: { published: { eq: true } }
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
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt
      fields {
        slug
      }
      headings {
        id
        value
        depth
      }
      timeToRead
      frontmatter {
        title
        tags
        date
        image {
          relativePath
          relativeDirectory
          root
          sourceInstanceName
          publicURL
        }
      }
    }
  }
`