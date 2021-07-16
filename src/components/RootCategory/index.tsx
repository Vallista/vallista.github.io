import React from 'react'
import styled from 'styled-components'
import tags from '../../assets/tags'
import { Color } from '../../utils'
import ProfileBadge from '../ProfileBadge'


const CategoryWrapper = styled.div`
  width: 100px;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${Color.PURPLE_100};
  position: relative;
  z-index: 100;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: calc(20% - 65px);
    width: 100%;
    height: 30px;
    background: transparent;
    background: linear-gradient(180deg, transparent 0%, rgba(183, 147, 193, 1) 100%);
  }
`

const CategoryScrollLayer = styled.div`
  width: 100%;
  height: 80%;
  overflow: auto;
  position: relative;
`

const Category = styled.ul`
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

const CategoryItem = styled.li`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:last-child {
    margin-bottom: 30px;
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
      color: ${Color.PURPLE_100};
      font-weight: 800;
    }
  `: `
    &: hover {
      background-color: ${Color.PURPLE_200};
      & > p {
        font-size: 15px;
      }
    }
  `}
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

const Contents = styled.div`
  width: 100%;
  height: calc(100% - 100px);
`

const LockWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

interface Props {
  isSelectProfile: boolean
  isLocked: boolean
  group: any[]
  selectTag: string
  onLocked: () => void
  onMoveCategory: (value: string) => void
  onMoveIndex: () => void
}

const IconElement: React.VFC<{ target: string, isSelect: boolean }> = ({ target, isSelect }) => {
  const findTarget = tags.find(it => it.name === target)

  if (!findTarget) return <Text>{target}</Text>

  return (
    <findTarget.component width="24px" height="24px" fill={isSelect ? Color.GRAY_100 : Color.GRAY_900} />
  )
}

const RootCategory: React.VFC<Props> = React.memo((props) => {
  const {
    isSelectProfile,
    group,
    selectTag,
    isLocked,
    onLocked,
    onMoveIndex,
    onMoveCategory
  } = props

  return (
    <CategoryWrapper>
      <Contents>
        <ProfileBadge selected={isSelectProfile} onMoveIndex={onMoveIndex} />
        <CategoryScrollLayer>
          <Category>
            {
              group.map(({ fieldValue }) => (
                <CategoryItem key={fieldValue}>
                  <Button selected={selectTag === fieldValue} onClick={() => onMoveCategory(fieldValue)}>
                    <IconElement target={fieldValue} isSelect={selectTag === fieldValue} />
                  </Button>
                </CategoryItem>
              ))
            }
          </Category>
        </CategoryScrollLayer>
      </Contents>
      <LockWrapper>
        <LockIcon isProfile={isSelectProfile && selectTag === ''} locked={isLocked} onClick={onLocked} />
      </LockWrapper>
    </CategoryWrapper>
  )
})

export default RootCategory
