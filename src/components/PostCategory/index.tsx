import React from 'react'
import styled from 'styled-components'
import { Color } from '../../utils'

import LoadingSvg from '../../assets/svgs/loading.svg'
import TempImage from '../../../profile/assets/profile.jpg'

const Wrapper = styled.div<{ locked: boolean }>`
  position: relative;
  width: 300px;
  height: 100vh;
  z-index: 50;
  top: 0;
  transition: transform 0.5s ease-in-out;

  ${props => !props.locked ? `
    position: absolute;
    left: 100px;
    transform: translateX(-300px);
  ` : ``}
`

const Category = styled.ul`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  align-self: flex-start;
  flex-wrap: wrap;
  background-color: ${Color.GRAY_900};
  box-shadow: 15px 0 10px -2px ${Color.GRAY_650};
  overflow: scroll;
  padding: 6px 6px 0;
  margin: 0;
  list-style: none;

  --ms-overflow-style: none;
  scrollbar-width: none;
  &:-webkit-scrollbar {
    display: none;
  }
`

const CategoryItem = styled.li<{ orderIndex: number, image: string }>`
  margin: 0;
  padding: 0;
  position: relative;
  ${props => props.orderIndex % 3 === 0 ? 'width: 100%;' : 'width: 48.8%;'}
  ${props => props.orderIndex % 3 === 0 ? 'height: 300px;' : 'height: 150px;'}
  ${props => props.image && `background-image: url('${props.image}');`}
  box-sizing: border-box;
  border-radius: 6px;
  margin-bottom: 6px;
  ${props => props.orderIndex % 3 === 1 ? 'margin-right: 6px;' : ''}

  &:before {
    content: '';
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 6px;
  }
`

const Contents = styled.div<{ orderIndex: number }>`
  position: absolute;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  ${props => props.orderIndex % 3 === 0 ? `padding: 20px 16px;` : `padding: 12px;`}
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Title = styled.p<{ orderIndex: number }>`
  color: ${Color.GRAY_900};
  line-height: 1.1;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 800;
  ${props => props.orderIndex % 3 === 0 ? `
    font-size: 24px;
  `: `
    font-size: 14px;
  `}
  margin: 0;
`

const Description = styled.p`
  color: ${Color.GRAY_700};
  line-height: 1.2;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
  text-align: right;
  word-break: break-all;
  margin: 0;
`

const Button = styled.button`
  display: flex;
  cursor: pointer;
  outline: none;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  background: none;
  border: none;
  text-align: left;
`

const Loading = styled.div<{ isLoading: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 5;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  ${props => props.isLoading ? `
    animation: fadeOut 1.5s ease-in-out forwards;
  ` : ``}

  @keyframes fadeOut {
    0% {
      background-color: #fff;
    }

    50% {
      background-color: #fff;
      opacity: 1;
    }

    80% {
      background-color: transparent;
    }

    100% {
      opacity: 0;
      z-index: -1;
    }
  }
`

interface Props {
  isLocked: boolean
  isLoading: boolean
  secondCategoryRef: React.RefObject<HTMLUListElement>
  edges: {
    node: {
      excerpt: string;
      fields: {
        slug: string;
      };
      frontmatter: {
        title: string;
        date: string;
        tags: string[];
        image?: {
          publicURL: string;
        };
      };
    };
  }[]
  onMoveLocation: (name: string, date: string) => void
}

const PostCategory: React.VFC<Props> = React.memo((props) => {
  const {
    isLocked,
    isLoading,
    secondCategoryRef,
    edges,
    onMoveLocation
  } = props

  return (
    <Wrapper locked={isLocked}>
      <Category ref={secondCategoryRef} id='unique-second-category'>
        {
          edges.map(({ node }, idx) => (
            <CategoryItem
              key={node.fields.slug}
              orderIndex={idx}
              image={node.frontmatter.image?.publicURL ?? TempImage}
              style={{
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}
            >
              <Button onClick={() => onMoveLocation(node.fields.slug, node.frontmatter.date)} style={{ display: 'block', width: '100%', height: '100%' }}>
                <Contents orderIndex={idx}>
                  <Title
                    orderIndex={idx}
                  >
                    {node.frontmatter.title}
                  </Title>
                  {idx % 3 === 0 && (
                    <Description>
                      {node.excerpt}
                    </Description>
                  )}
                </Contents>
              </Button>
            </CategoryItem>
          ))
        }
      </Category>
      {
        <Loading isLoading={isLoading}>
          <div>
            <LoadingSvg />
          </div>
        </Loading>
      }
    </Wrapper>
  )
})

export default PostCategory