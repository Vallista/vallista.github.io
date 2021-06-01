import React from 'react'
import styled from 'styled-components'
import { Color } from '../../utils'

const Position = styled.div`
  position: fixed;
  padding-right: 24px;
  right: 0;
  top: 50%;
  z-index: 100;
  width: 0;
  transition: transform 0.5s ease-in-out;
  transform: translate(260px, -50%);
  
  &:hover {
    transform: translate(0, -50%);

    section {
      &:before {
        opacity: 0;
      }
    }
  }
`

const Line = styled.div`
  position: relative;
  width: 10px;
  height: 80vh;
  background-color: #fff;
  border-radius: 22px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 105;
`

const Circle = styled.div<{ y: number; level: number; text: string }>`
  position: absolute;
  left: 50%;
  top: calc(80vh * ${props => props.y});
  transform: translate(-50%, -50%);
  width: calc(${props => props.level} * 6px);
  height: calc(${props => props.level} * 6px);
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border-bottom: none;
  border-top: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 105;

  &:first-child {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    &:before {
      top: -1px;
    }
  }

  &:before {
    content: '';
    position: relative;
    width: calc(${props => props.level} * 4px);
    height: calc(${props => props.level} * 4px);
    background-color: ${Color.GRAY_500};
    border-radius: 10px;
    transition: all 0.4s ease-in-out;
  }

  &:after {
    content: '${props => props.text}';
    position: absolute;
    left: -12px;
    top: 50%;
    transform: translate(-100%, -50%);
    white-space: nowrap;
    text-align: right;
    font-size: 12px;
    color: ${Color.GRAY_400};
    transition: all 0.2s ease-in-out;
    line-height: 1.1;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 200px;
    height: auto;
  }

  &:hover {
    &:before {
      background-color: ${Color.RED_100};
    }

    &:after {
      transform: translate(-110%, -50%) scale(1.2, 1.2);
      color: ${Color.RED_100};
      font-weight: 600;
    }
  }
`

const TouchableArea = styled.section`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(-95%, -50%);
  width: 300px;
  height: 85vh;
  z-index: 99;
  
  &:before {
    content: '';
    position: relative;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
    display: block;
    
    width: 0; 
    height: 0; 
    border-top: 24px solid transparent;
    border-bottom: 24px solid transparent;
    border-right: 24px solid ${Color.RED_100};
    margin-left: 26px;
    transition: opacity 0.2s;
  }
`

interface IProps {
  headings: {
    id: string
    value: string
    depth: number
  }[]
}

const PostNavigator: React.FC<IProps> = ({ headings }) => {
  if (headings.length === 0) return null;

  const onMoveHeading = (level: number, text: string) => {
    const elements = document.getElementsByTagName(`h${level}`)
    if (elements.length === 0) return

    for (let i = 0; i < elements.length; i++) {
      if (elements[i].textContent.includes(text)) {
        const contentsBody = document.getElementById('contents')
        const y = elements[i].getBoundingClientRect().y
        contentsBody.scrollTo(0, y + contentsBody.scrollTop);
        break
      }
    }
  }

  return (
    <Position>
      <TouchableArea />
      <Line>
        {headings.map((it, idx) => (
          <Circle y={idx / (headings.length - 1)} level={6 - it.depth} text={it.value} key={idx} onClick={() => onMoveHeading(it.depth, it.value)} />
        ))}
      </Line>
    </Position>
  )
}

export default PostNavigator