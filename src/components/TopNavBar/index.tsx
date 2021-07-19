import React from 'react'
import styled from 'styled-components'
import { Color } from '../../utils'

import HamburgerIcon from '../../assets/svgs/hamburger.svg';
import HomeIcon from '../../assets/svgs/home.svg';

const Wrapper = styled.section<{ isOverScrollHeader: boolean, isSelectNavList: boolean }>`
  position: fixed;
  z-index: 200;
  left: 0;
  top: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: ${props => props.isSelectNavList ? '100vh' : 'auto'};
  background-color: ${props => props.isOverScrollHeader ? `${Color.GRAY_900}` : 'transparent'};
  transition: background-color 0.3s ease-in-out;
`

const Header = styled.section<{ isOverScrollHeader: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 12px;
  ${props => props.isOverScrollHeader && `border-bottom: 1px solid ${Color.GRAY_700};`}
`

const Contents = styled.section`
  width: 100%;
  height: calc(100% - 50px);
  padding: 24px 60px 160px 24px;
  overflow: scroll;

  & ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  --ms-overflow-style: none;
  scrollbar-width: none;
  &:-webkit-scrollbar {
    display: none;
  }
`

const Content = styled.li<{ isSelect: boolean }>`
  position: relative;
  line-height: 1.2;
  margin-bottom: 6px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ${props => props.isSelect ? 'cursor: default;' : 'cursor: pointer;'}

  &:before {
    content: '';
    width: 6px;
    height: 6px;
    background-color: ${Color.PURPLE_100};
    border-radius: 6px;
    margin-right: 12px;
  }

  & p {
    width: calc(100% - 12px);
  }

  ${props => props.isSelect && `
    &:after {
      content: '';
      position: absolute;
      right: -30px;
      top: 50%;
      width: 6px;
      height: 6px;
      border: 6px solid ${Color.PURPLE_100};
      border-top: none;
      border-right: none;
      transform: translate(-50%, -50%) rotateZ(45deg);
      animation: BreatheIcon 0.5s ease-in-out infinite;
    }

    @keyframes BreatheIcon {
      0% {
        transform: translate(-50%, -50%) rotateZ(45deg);
      }

      50% {
        transform: translate(-30%, -50%) rotateZ(45deg);
      }

      100% {
        transform: translate(-50%, -50%) rotateZ(45deg);
      }
    }
  `}
`

interface Props {
  isOverScrollHeader: boolean
  isActiveScrollHeader: boolean
  isSelectNavList: boolean
  setSelectNavList: (value: React.SetStateAction<boolean>) => void
  navigate: (value: string) => void
  onMoveLocation: (value: string, date: string) => void
  frontmatter?: {
    title
  }
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
    }
  }[]
}

const TopNavBar: React.VFC<Props> = React.memo((props) => {
  const { isOverScrollHeader, isActiveScrollHeader, isSelectNavList, setSelectNavList, navigate, onMoveLocation, frontmatter, edges } = props

  const isHome = typeof window === 'undefined' ?
    false :
    (window?.location.href ?? false) === 'https://vallista.kr' ||
    (window?.location.href ?? false) === 'http://localhost:8000'

  return (
    <Wrapper id="top-nav-bar" isOverScrollHeader={isActiveScrollHeader} isSelectNavList={isSelectNavList}>
      <Header isOverScrollHeader={isOverScrollHeader}>
        {
          (isActiveScrollHeader && isHome) ? (
            !isSelectNavList
              ? (
                <p style={{ margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {frontmatter?.title}
                </p>
              ) : (
                <div
                  style={{ backgroundColor: Color.GRAY_900, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '6px', cursor: 'pointer' }}
                  onClick={() => navigate('/')}
                >
                  <HomeIcon width="30" height="30" fill={Color.GRAY_300} />
                </div>
              )
          ) : <span></span>
        }
        <div
          style={{ backgroundColor: Color.GRAY_900, padding: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '6px', cursor: 'pointer' }}
          onClick={() => setSelectNavList((prev) => !prev)}
        >
          <HamburgerIcon width="18" height="18" fill={Color.GRAY_300} />
        </div>
      </Header>
      {isSelectNavList && <Contents>
        <ul>
          {edges.map((it) => <Content
            onClick={() => onMoveLocation(it.node.fields.slug, it.node.frontmatter.date)}
            isSelect={frontmatter?.title === it.node.frontmatter.title}
          >
            <p style={{ color: `${frontmatter?.title === it.node.frontmatter.title ? Color.PURPLE_100 : Color.GRAY_100}` }}>
              {it.node.frontmatter.title}
            </p>
          </Content>
          )}
        </ul>
      </Contents>}
    </Wrapper>
  )
})

export default TopNavBar
