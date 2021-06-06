import React, { useMemo } from 'react'
import { graphql, Link, PageProps } from 'gatsby';
import PageTemplate from '../components/PageTemplate';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { Color, toDate } from '../utils';

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
  max-width: 960px;
  min-height: 240px;
  height: auto;
  color: ${Color.GRAY_400};
  padding: 24px 50px;
  border-bottom: 1px solid #e2e8f0;

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
    background-color: rgba(0, 0, 0, 0.6);
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
  max-width: 960px;
  height: auto;
  box-sizing: border-box;
  padding: 24px 50px;
`

const Post: React.VFC<PageProps<IDataProps>> = ({ data }) => {
  const { markdownRemark } = data
  const { html, frontmatter } = markdownRemark
  const { title, date, image, tags } = frontmatter

  const translateDateFormat = useMemo(() => toDate(date), [date])
  const year = translateDateFormat.getFullYear()
  const month = (translateDateFormat.getMonth() + 1).toString().padStart(2, '0')
  const day = translateDateFormat.getDate().toString().padStart(2, '0')

  return (
    <PageTemplate {...data}>
      <Layout justifyContent='center' overflow='auto' padding='0 48px' scrollBehavior='smooth' id='contents'>
        <Layout flexDirection='column' width='auto' height='auto' backgroundColor={Color.GRAY_900} maxWidth='960px'>
          <PostHeader id='post-header' backgroundImage={image?.publicURL}>
            <>
              <div>
                <h1>{title}</h1>
                <p style={{ marginTop: '6px', marginBottom: '0' }}>{year}.{month}.{day} - 읽는데 약 {markdownRemark.timeToRead}분 걸려요!</p>
                <p style={{ marginTop: '-2px' }}>글쓴이 - <Link to='/' style={{ fontWeight: 600 }}>@Vallista</Link></p>
                <p>
                  {tags.map(it => (
                    <div style={{
                      backgroundColor: Color.RED_100,
                      borderRadius: '12px',
                      padding: '5px 8px 6px',
                      marginRight: '6px',
                      marginBottom: '6px',
                      display: 'inline-block',
                      color: Color.GRAY_900,
                      fontWeight: 600,
                      fontSize: 14,
                    }}>
                      {it}
                    </div>
                  ))}
                </p>
              </div>
            </>
          </PostHeader>
          <PostContents id="post-contents" dangerouslySetInnerHTML={{ __html: html }} />
          <div style={{ paddingBottom: '30vh' }} />
        </Layout>
      </Layout>
    </PageTemplate>
  )
}

export default Post

export const pageQuery = graphql`
  query BlogPostQuery($id: String!) {
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
    markdownRemark(id: { eq: $id }) {
      id
      html
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