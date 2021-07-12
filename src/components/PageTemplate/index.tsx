import React, { useMemo, useState, useRef, useEffect } from "react"
import { navigate } from "gatsby"
import { useLocation } from "@reach/router"
import throttle from "just-throttle"

import Layout from '../Layout'

import tags from '../../assets/tags'
import HeadingNavigator from "../HeadingNavigator"
import TopNavBar from '../TopNavBar';
import RootCategory from '../RootCategory';
import PostCategory from '../PostCategory/index';

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

function onTouchMove(e: TouchEvent) { e.preventDefault() }
function onTouchEnd(e: TouchEvent) { e.preventDefault() }

function resizingAllHighlighter(): void {
  const elements: HTMLCollectionOf<HTMLDivElement> = document.getElementsByClassName('gatsby-highlight') as HTMLCollectionOf<HTMLDivElement>;
  for (let i = 0; i < elements.length; i++) {
    const contents = document.getElementById('contents') as HTMLDivElement
    const innerContents = contents.firstChild as HTMLDivElement

    const calculate = window.innerWidth > 880
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

  const { edges, group: tempGroup } = allMarkdownRemark
  const [group] = useState(() => {
    return tags.reduce((acc, curr) => {
      const target = tempGroup.find((it) => curr.name === it.fieldValue)
      if (target) acc.push(target)

      return acc;
    }, [])
  });
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
  const [scrollY, setScrollY] = useState<number>(() => {
    if (typeof window === 'undefined') return 0
    return window.scrollY
  })
  const [innerWidth, setInnerWidth] = useState<number>(() => {
    if (typeof window === 'undefined') return 0
    return window.innerWidth
  })

  const [innerHeight, setInnerHeight] = useState<number>(() => {
    if (typeof window === 'undefined') return 0
    return window.innerHeight
  })

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
      setInnerWidth((e.currentTarget as Window).innerWidth)
      setInnerHeight((e.currentTarget as Window).innerHeight)
      if (innerWidth < 1380) {
        setTimeout(() => {
          handleLocked(false)
        }, 0)
      }

      resizingAllHighlighter();
    });

    document.getElementById('contents')?.addEventListener('scroll',
      throttle((e) => {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (!isMobile) setScrollY((e.currentTarget as HTMLDivElement).scrollTop)
        else {
          const headerHeight = document.getElementById('post-header').clientHeight

          if (scrollY > headerHeight) {
            if (!isOverScrollHeader) setOverScrollHeader(true)
          } else if (scrollY <= headerHeight) {
            setOverScrollHeader(false)
          }
        }
      }, 200)
    )

    resizingAllHighlighter();
  }, [])

  useEffect(() => {
    const contents = document.getElementById('contents') || document.getElementById('index-content')

    if (isSelectNavList) {
      if (contents) {
        contents.style.overflow = 'hidden'
        contents.addEventListener('touchmove', onTouchMove, true)
        contents.addEventListener('touchend', onTouchEnd, true)
      }
    } else {
      if (contents) {
        contents.style.overflow = 'auto'
        contents.removeEventListener('touchmove', onTouchMove, true)
        contents.removeEventListener('touchend', onTouchEnd, true)
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

  const isActiveScrollHeader = isOverScrollHeader || isSelectNavList

  return (
    <Layout flexDirection='row'>
      <TopNavBar
        isActiveScrollHeader={isActiveScrollHeader}
        isSelectNavList={isSelectNavList}
        isOverScrollHeader={isOverScrollHeader}
        edges={edges}
        navigate={navigate}
        onMoveLocation={onMoveLocation}
        frontmatter={markdownRemark?.frontmatter}
        setSelectNavList={setSelectNavList}
      />
      <Layout width='unset' id='sidebar'>
        <RootCategory
          isSelectProfile={isSelectProfile}
          onMoveCategory={onMoveCategory}
          onMoveIndex={onMoveIndex}
          group={group}
          selectTag={selectTag}
          isLocked={isLocked}
          onLocked={onLocked}
        />
        <PostCategory
          isLoading={isLoading}
          isLocked={isLocked}
          onMoveLocation={onMoveLocation}
          edges={filteredEdge}
          secondCategoryRef={secondCategoryRef}
        />
      </Layout>
      {children}
      <HeadingNavigator
        scrollY={scrollY}
        innerWidth={innerWidth}
        innerHeight={innerHeight}
        headings={markdownRemark?.headings || []}
      />
    </Layout>
  )
}

export default PageTemplate
