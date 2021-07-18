import { navigate } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { Color, getTime } from '../../utils'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${Color.GRAY_800};
  border-radius: 6px;
  margin-bottom: 48px;
  padding: 24px;
`

const Header = styled.header`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 24px;
  line-height: 1.2;

  &:before {
    content: '시리즈 연재';
    font-size: 0.9rem;
    color: ${Color.GRAY_500};
    margin-bottom: 6px;
  }

  @media screen and (max-width: 420px) {
    font-size: 1.0rem;

    &:before {
      font-size: 0.7rem;
      margin-bottom: 2px;
    }
  }
`

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

const List = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
`

const ListItem = styled.li<{ order: number, isSelected: boolean }>`
  color: ${props => props.isSelected ? Color.PURPLE_100 : Color.GRAY_300};
  font-weight: ${props => props.isSelected ? 700 : 400};
  margin-bottom: 2px;
  font-size: 1rem;
  cursor: pointer;
  transition: opacity 0.3s;

  &:before {
    display: inline-block;
    width: 1.5rem;
    content: '${props => props.order}.';
    margin-right: 6px;
  }

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    opacity: 0.5;
  }

  @media screen and (max-width: 420px) {
    font-size: 0.8rem;

    &:before {
      width: 1.0rem;
    }
  }
`

interface Props {
  title: string
  pageName: string
  posts: {
    title: string
    name: string
    priority: number
    date: string
  }[]
}

const Series: React.VFC<Props> = (props) => {
  const { title, posts } = props

  const orderedPosts = posts
    .sort((a, b) => a.priority - b.priority)
    .map((it) => ({
      ...it,
      name: filteringName(it.name)
    }))

  const pageName = filteringName(props.pageName)

  return (
    <Wrapper>
      <Header>{title}</Header>
      <Contents>
        <List>
          {orderedPosts.map((it, idx) => <ListItem
            isSelected={pageName === it.title}
            order={idx + 1}
            onClick={() => onMoveLocation(it.name, it.date)}
            key={idx}
          >
            {it.title}
          </ListItem>)}
        </List>
      </Contents>
    </Wrapper>
  )

  function onMoveLocation(value: string, date: string) {
    const [year, month, day] = getTime(date)
    const lastValue = value[value.length - 1] === '/' ? value.slice(0, value.length - 1) : value
    navigate(`/${year}/${month}/${day}/${lastValue}`)
  }

  function filteringName(value: string) {
    const splitArr = value.split('/')

    if (splitArr.length === 1) return value
    return splitArr
      .reduce((acc, curr, idx, arr) => {
        if (idx === 0 || idx === arr.length - 1) return acc
        acc.push(curr)
        return acc
      }, [])
      .join('')
  }
}

export default Series;