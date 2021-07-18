import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Color } from '../../utils';
import Arrow from '../../assets/svgs/Arrow'

const lineHeight = 300;

const Container = styled.div<{ pos: number }>`
  position: fixed;
  top: 100px;
  left: 0;
  transform: translateX(${props => `${props.pos + 50}px`});
  z-index: 1000;
  display: flex;
  flex-direction: column;
`

const Decorator = styled.p`
  margin: 0;
  font-size: 0.85rem;
  color: ${Color.GRAY_300};
  transition: color 1s;
  cursor: pointer;

  &:hover {
    color: ${Color.PURPLE_100};
  }
`

const Line = styled.div`
  position: relative;
  width: 1px;
  height: ${lineHeight}px;
  margin-left: 8px;
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: ${Color.PURPLE_100};
  cursor: pointer;
`

const LineProgress = styled.div<{ pos: number; height: number }>`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, ${props => props.pos}px);
  will-change: transform;
  transition: transform 0.3s ease-out;
  width: 8px;
  height: ${props => props.height}px;
  background-color: ${Color.PURPLE_100};
  cursor: ns-resize;
`

const LineContents = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: -5px;
  padding-left: 30px;
  width: auto;
`

const Title = styled.span`
  white-space: nowrap;
  margin: 0;
  font-size: 0.8rem;
`

const ArrowWrapper = styled.div<{ reverse?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  cursor: pointer;
  ${props => props.reverse && `transform: rotateZ(180deg);`}
`

const ArrowContainer = styled.div`
  width: 32px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
`

interface Props {
  scrollY: number
  innerWidth: number
  innerHeight: number
  headings: {
    id: string
    value: string
    depth: number
  }[]
  isLocked: boolean
}

const HeadingNavigator: React.VFC<Props> = React.memo((props) => {
  const { scrollY, innerWidth, innerHeight, headings: propHeadings, isLocked } = props

  const [pos, setPos] = useState<number>(-9999);

  const [scrollBarPos, setScrollBarPos] = useState<number>(() => {
    if (typeof window === 'undefined') return 0

    const top = (scrollY / document?.getElementById('content')?.scrollHeight) * lineHeight
    return top ? top : 0
  })

  const [scrollBarHeight, setScrollBarHeight] = useState<number>(50)

  const [headings, setHeadings] = useState<{ level: number, name: string; y: number, index: number }[]>([]);
  const [nowHeading, setNowHeading] = useState<{ level: number, name: string; y: number, index: number } | null>()

  const isVisible = innerWidth > 1200;

  useEffect(() => {
    const markdownElements = new Array(...document.getElementById('post-markdown')?.querySelectorAll('*') ?? [])
      .filter((it) => {
        return it.tagName === 'H1' ||
          it.tagName === 'H2' ||
          it.tagName === 'H3' ||
          it.tagName === 'H4' ||
          it.tagName === 'H5' ||
          it.tagName === 'H6'
      })

    setHeadings(
      [
        { level: 0, name: '머릿말', y: 0, index: 0 },
        ...propHeadings
          .map((heading, idx) => {
            console.log(markdownElements[idx])
            const y = Math.floor(markdownElements[idx]?.getBoundingClientRect().y ?? 0)
            return { level: heading.depth, name: heading.value, y, index: idx + 1 }
          })
      ]
    )

    setTimeout(() => {
      initialWidth()
      setScrollBarPos((scrollY / document?.getElementById('content')?.scrollHeight) * lineHeight)
    })

    setInterval(() => {
      const content = document.getElementById('content');

      if (!content) return
      if (window.innerWidth > 1200) {
        content.style.marginLeft = '-250px';
        return;
      } else {
        content.style.marginLeft = '0'
      }

      initialWidth()
    }, 100)
  }, [])

  useEffect(() => {
    setNowHeading(headings[0] || null)
  }, [headings])

  const initialHeight = () => {
    const height = (window.innerHeight / document?.getElementById('content')?.scrollHeight) * lineHeight

    window.setTimeout(() => setScrollBarHeight(height))
  }

  const initialWidth = () => {
    const content = document.getElementById('content');
    if (!content) return
    if (content.getBoundingClientRect().right === pos) return

    clearTimeout();
    setTimeout(() => setPos(content.getBoundingClientRect().right))
  }

  useEffect(() => {
    initialWidth()
  }, [innerWidth, isLocked]);

  useEffect(() => {
    setScrollBarPos(calculateScrollPos());

    headings.forEach((it) => {
      if (scrollY >= it.y) { setNowHeading(it) }
    })
  }, [scrollY])

  useEffect(() => {
    initialHeight()

    clearInterval()
    setInterval(() => {
      initialHeight()
    }, 1000)
  }, [innerHeight])

  return isVisible && (
    <Container pos={pos}>
      <Decorator onClick={onScrollTop}>타이틀</Decorator>
      <Line>
        <LineProgress pos={scrollBarPos} height={scrollBarHeight}>
          <LineContents>
            <span>{
              isScrollEnd() ? 100 : Math.floor(calculateScrollPos() / 3)
            }%</span>
            <Title>{nowHeading?.name}</Title>
            {/* <ArrowContainer>
              <ArrowWrapper reverse={true}>
                <Arrow width={16} height={16} fill={Color.GRAY_500} />
              </ArrowWrapper>
              <ArrowWrapper>
                <Arrow width={16} height={16} fill={Color.GRAY_500} />
              </ArrowWrapper>
            </ArrowContainer> */}
          </LineContents>
        </LineProgress>
      </Line>
      <Decorator onClick={onScrollBottom}>하단</Decorator>
    </Container>
  )

  function calculateScrollPos() {
    const scrollHeight = document?.getElementById('content')?.scrollHeight

    return Math.floor((scrollY / scrollHeight) * lineHeight)
  }

  function onScrollTop() {
    document.getElementById('contents').scrollTo(0, 0);
  }

  function onScrollBottom() {
    const content = document.getElementById('contents')
    content.scroll(0, content.scrollHeight);
  }

  function isScrollEnd() {
    return (nowHeading?.index ?? 0) === headings.length - 1
  }
})

export default HeadingNavigator
