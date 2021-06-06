import React, { useMemo, useState, useRef, useEffect } from "react"
import { navigate } from "gatsby"
import { useLocation } from "@reach/router"
import styled from 'styled-components'

import Layout from '../Layout'
import { Color } from "../../utils"

import LoadingSvg from '../../assets/svgs/loading.svg'
import TempImage from '../../../profile/assets/profile.jpg'

import ProfileBadge from '../ProfileBadge'
import PostNavigator from "../PostNavigator"

import tags from '../../assets/tags'
import HamburgerIcon from '../../assets/svgs/hamburger.svg';
import HomeIcon from '../../assets/svgs/home.svg';

const FirstCategoryWrapper = styled.div`
  width: 100px;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${Color.RED_100};
  position: relative;
  z-index: 100;
`

const FirstCategoryOverflow = styled.div`
  width: 100%;
  height: 80%;
  overflow: auto;
`

const FirstCategory = styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: scroll;
  list-style: none;
  margin: 0;
  padding: 0;
`

const FirstCategoryItem = styled.li`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SecondCategoryWrapper = styled.div<{ locked: boolean }>`
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

const SecondCategory = styled.ul`
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
`

const SecondCategoryItem = styled.li<{ orderIndex: number, image: string }>`
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

const SecondCategoryContents = styled.div<{ orderIndex: number }>`
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

const SecondCategoryTitle = styled.p<{ orderIndex: number }>`
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

const SecondCategoryDescription = styled.p`
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

const Text = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${Color.GRAY_900};
  font-size: 14px;
  text-align: center;
  transition: color 0.3s ease-out, font-size 0.3s ease-out;
  margin: 0;
`

const Button = styled.button<{ selected?: boolean }>`
  cursor: pointer;
  outline: none;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 12px;
  margin: 0;
  background: none;
  border: none;
  transition: background-color 0.3s ease-out;
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;

  ${props => props.selected ? `
    background-color: ${Color.GRAY_900};

    & > p {
      color: ${Color.RED_100};
      font-weight: 800;
    }
  `: `
    &: hover {
      background-color: ${Color.RED_200};
      & > p {
        font-size: 15px;
      }
    }
  `}
`

const SecondButton = styled.button`
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

const LockIcon = styled.div<{ locked: boolean; isProfile: boolean }>`
  background: ${Color.GRAY_900};
  border-radius: 3px;
  width: 20px;
  height: 16px;
  position: relative;
  z-index: 5;
  transition: transform 0.5s ease-in-out;
  cursor: pointer;

  ${props => (props.isProfile && !props.locked) ? `
    transform: translateY(200px);
  ` : `
    transform: translateY(0);
  `}

  &:before {
    content: "";
    display: block;
    position: absolute;
    border: 3px solid ${Color.GRAY_900};
    border-bottom: none;
    top: -10px;
    left: 2px;
    width: 10px;
    height: 10px;
    border-radius: 35px 35px 0 0;
    transform: translateX(95%);
    transition: transform 0.2s ease-out;
    z-index: 1;
    ${props => props.locked ? `
      transform: rotateY(180deg);
    ` : ``}
  }
`

const TopNavBar = styled.section<{ isOverScrollHeader: boolean, isSelectNavList: boolean }>`
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

const TopNavHeader = styled.section<{ isOverScrollHeader: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 12px;
  ${props => props.isOverScrollHeader && `border-bottom: 1px solid ${Color.GRAY_700};`}
`

const TopNavContents = styled.section`
  width: 100%;
  height: calc(100% - 50px);
  padding: 24px 60px 100px 24px;
  overflow: scroll;

  & ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
`

const TopNavContent = styled.li<{ isSelect: boolean }>`
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
    background-color: ${Color.RED_100};
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
      border: 6px solid ${Color.RED_100};
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
          tags: string[]
          image?: {
            publicURL: string
          }
        }
      }
    }>
    group: Array<{ fieldValue: string; totalCount: number }>
  }
  markdownRemark?: {
    html: string
    fields: {
      slug: string
    }
    headings: {
      id: string
      value: string
      depth: number
    }[]
    frontmatter: {
      title: string
      date: string
      tags: string[]
      image?: {
        publicURL: string
      }
    }
    timeToRead: number
  }
}

function resizingAllHighlighter(): void {
  const elements: HTMLCollectionOf<HTMLDivElement> = document.getElementsByClassName('gatsby-highlight') as HTMLCollectionOf<HTMLDivElement>;
  for (let i = 0; i < elements.length; i++) {
    const contents = document.getElementById('contents') as HTMLDivElement
    const innerContents = contents.firstChild as HTMLDivElement

    const calculate = window.innerWidth > 1080
      ? innerContents.clientWidth - 100
      : window.innerWidth > 639
        ? window.innerWidth - 244
        : window.innerWidth > 419
          ? window.innerWidth - 144
          : window.innerWidth - 48

    elements[i].style.width = `${calculate}px`;
  }
}

const getTime = (date: string): [string, string, string] => {
  const translate = date.split(/[\-\+ :T]/)
  return [translate[0] || '0', translate[1] || '0', translate[2] || '0']
}

const SAVE_SELECT_TAG = 'select-tag'
const SAVE_SCROLL_POS = 'post-scroll-pos'
const SAVE_LOCKED = 'locked'
const SAVE_PROFILE_SELECT = 'profile-select'

const PageTemplate: React.FC<IDataProps> = ({ allMarkdownRemark, markdownRemark, children }) => {
  const { pathname } = useLocation()

  const { edges, group } = allMarkdownRemark
  const secondCategoryRef = useRef<HTMLUListElement>(null)

  const isIndexPage = (pathname === '' || pathname === '/')

  // 이전 선택한 태그
  const prevSelectTag = typeof sessionStorage !== 'undefined' ? sessionStorage.getItem(SAVE_SELECT_TAG) || null : null
  const prevScrollPos = typeof sessionStorage !== 'undefined' ? sessionStorage.getItem(SAVE_SCROLL_POS) || null : null
  const saveLocked = typeof sessionStorage !== 'undefined' ? sessionStorage.getItem(SAVE_LOCKED) === 'true' : false
  const isProfile = typeof sessionStorage !== 'undefined' ? sessionStorage.getItem(SAVE_PROFILE_SELECT) === 'true' || isIndexPage : isIndexPage

  // 이전 선택한 태그가 있으면 현재 페이지가 이전 태그에 있는지 확인 필요
  const hasPrevSelectTagInPost = markdownRemark?.frontmatter.tags.includes(prevSelectTag) ?? null

  const findCategory = markdownRemark
    ? allMarkdownRemark.group.find(it => markdownRemark.frontmatter.tags.includes(it.fieldValue))
    : allMarkdownRemark.group[0]

  // 이전 선택한 태그가 현재 페이지에 존재한다면 (이동한 페이지에) 카테고리 고정
  const [selectTag, setSelectTag] = useState<string>(
    isProfile
      ? ''
      : hasPrevSelectTagInPost
        ? prevSelectTag
        : findCategory.fieldValue
  )
  const [isLoading, setLoading] = useState<boolean>(false)
  const [isLocked, setLocked] = useState<boolean>(isProfile && !prevSelectTag && saveLocked === false ? false : true)
  const [isSelectProfile, setSelectProfile] = useState<boolean>(isProfile)
  const [isOverScrollHeader, setOverScrollHeader] = useState<boolean>(false)
  const [isSelectNavList, setSelectNavList] = useState<boolean>(false)

  const handleSelectTag = (flag: string, savingStorage = true): void => {
    setSelectTag(flag)
    if (savingStorage) sessionStorage.setItem(SAVE_SELECT_TAG, flag)
  }

  const handleLocked = (flag: boolean, savingStorage = true): void => {
    setLocked(flag)
    if (savingStorage) sessionStorage.setItem(SAVE_LOCKED, String(flag))
  }

  const handleSelectProfile = (flag: boolean, savingStorage = true, action = true): void => {
    if (action) setSelectProfile(flag)
    if (savingStorage) sessionStorage.setItem(SAVE_PROFILE_SELECT, String(flag))
  }

  useEffect(() => {
    window.addEventListener('resize', (e) => {
      if ((e.currentTarget as Window).innerWidth < 1380) {
        setTimeout(() => {
          handleLocked(false)
        }, 0)
      }

      resizingAllHighlighter();
    });

    document.getElementById('contents')?.addEventListener('scroll', (e) => {
      const scrollY = (e.currentTarget as HTMLDivElement).scrollTop
      const headerHeight = document.getElementById('post-header').clientHeight

      if (scrollY > headerHeight) {
        if (!isOverScrollHeader) setOverScrollHeader(true)
      } else if (scrollY <= headerHeight) {
        setOverScrollHeader(false)
      }
    })

    resizingAllHighlighter();
  }, [])

  useEffect(() => {
    const contents = document.getElementById('contents')
    if (isSelectNavList) {
      if (contents) {
        contents.style.overflow = 'hidden'
        contents.addEventListener('touchmove', e => e.preventDefault(), { passive: false })
      }
    } else {
      if (contents) {
        contents.style.overflow = 'auto'
        contents.removeEventListener('touchmove', e => e.preventDefault())
      }
    }
  }, [isSelectNavList])

  useEffect(() => {
    if (selectTag === prevSelectTag) secondCategoryRef.current?.scrollTo(0, Number(prevScrollPos))

    if (isIndexPage) handleLocked(false)
    else handleLocked(saveLocked, false)

    setLoading(true)
  }, [])

  const filteredEdge = useMemo(() => edges.filter(it => it.node.frontmatter.tags.includes(selectTag)), [edges, selectTag])

  const onMoveCategory = (value: string) => {
    handleSelectTag(value)
    handleLocked(true, false);
    handleSelectProfile(false, false);
  }

  const onMoveLocation = (value: string, date: string) => {
    handleLocked(true)
    sessionStorage.setItem(SAVE_SCROLL_POS, String(secondCategoryRef.current.scrollTop))
    handleSelectProfile(false, true, false)

    const [year, month, day] = getTime(date)
    navigate(`/${year}/${month}/${day}${value}`)
  }

  const onLocked = () => {
    handleLocked(!saveLocked)
  }

  const onMoveIndex = () => {
    if (isIndexPage) {
      handleLocked(false)
    }
    handleSelectProfile(true)
    handleSelectTag('')
    navigate('/')
  }

  const IconElement: React.VFC<{ target: string, isSelect: boolean }> = ({ target, isSelect }) => {
    const findTarget = tags.find(it => it.name === target)

    if (!findTarget) return <Text>{target}</Text>

    return (
      <findTarget.component width="24px" height="24px" fill={isSelect ? Color.GRAY_100 : Color.GRAY_900} />
    )
  }

  const isActiveScrollHeader = isOverScrollHeader || isSelectNavList

  return (
    <Layout flexDirection='row'>
      <TopNavBar id="top-nav-bar" isOverScrollHeader={isActiveScrollHeader} isSelectNavList={isSelectNavList}>
        <TopNavHeader isOverScrollHeader={isOverScrollHeader}>
          {
            isActiveScrollHeader ? (
              !isSelectNavList
                ? (
                  <p style={{ margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {markdownRemark.frontmatter.title}
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
        </TopNavHeader>
        {isSelectNavList && <TopNavContents>
          <ul>
            {edges.map((it) => <TopNavContent
              onClick={() => onMoveLocation(it.node.fields.slug, it.node.frontmatter.date)}
              isSelect={markdownRemark?.frontmatter.title === it.node.frontmatter.title}
            >
              <p style={{ color: `${markdownRemark?.frontmatter.title === it.node.frontmatter.title ? Color.RED_100 : Color.GRAY_100}` }}>
                {it.node.frontmatter.title}
              </p>
            </TopNavContent>
            )}
          </ul>
        </TopNavContents>}
      </TopNavBar>
      <Layout width='unset' id='sidebar'>
        <FirstCategoryWrapper >
          <div style={{ width: '100%', height: 'calc(100% - 100px)' }}>
            <ProfileBadge selected={isSelectProfile} onMoveIndex={onMoveIndex} />
            <FirstCategoryOverflow>
              <FirstCategory>
                {
                  group.map(({ fieldValue }) => (
                    <FirstCategoryItem key={fieldValue}>
                      <Button selected={selectTag === fieldValue} onClick={() => onMoveCategory(fieldValue)}>
                        <IconElement target={fieldValue} isSelect={selectTag === fieldValue} />
                      </Button>
                    </FirstCategoryItem>
                  ))
                }
              </FirstCategory>
            </FirstCategoryOverflow>
          </div>
          <div style={{
            width: '100%',
            height: '100px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden'
          }}>
            <LockIcon isProfile={isSelectProfile && selectTag === ''} locked={isLocked} onClick={onLocked} />
          </div>
        </FirstCategoryWrapper>
        <SecondCategoryWrapper locked={isLocked}>
          <SecondCategory ref={secondCategoryRef} id='unique-second-category'>
            {
              filteredEdge.map(({ node }, idx) => (
                <SecondCategoryItem
                  key={node.fields.slug}
                  orderIndex={idx}
                  image={node.frontmatter.image?.publicURL ?? TempImage}
                  style={{
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                  }}
                >
                  <SecondButton onClick={() => onMoveLocation(node.fields.slug, node.frontmatter.date)} style={{ display: 'block', width: '100%', height: '100%' }}>
                    <SecondCategoryContents orderIndex={idx}>
                      <SecondCategoryTitle
                        orderIndex={idx}
                      >
                        {node.frontmatter.title}
                      </SecondCategoryTitle>
                      {idx % 3 === 0 && (
                        <SecondCategoryDescription>
                          {node.excerpt}
                        </SecondCategoryDescription>
                      )}
                    </SecondCategoryContents>
                  </SecondButton>
                </SecondCategoryItem>
              ))
            }
          </SecondCategory>
          {
            <Loading isLoading={isLoading}>
              <div>
                <LoadingSvg />
              </div>
            </Loading>
          }
        </SecondCategoryWrapper>
      </Layout>
      {children}
      <PostNavigator headings={markdownRemark?.headings || []} />
    </Layout>
  )
}

export default PageTemplate
