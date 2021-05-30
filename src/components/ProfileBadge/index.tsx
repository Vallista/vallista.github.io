import React from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby-link'
// import InfoData from '../../../profile/info.json'

import ProfileImage from '../../../profile/assets/profile.jpg'
import { Color } from '../../utils'

const Profile = styled.div`
  position: relative;
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 24px;

  &:hover {
    & > div {
      width: 200px;
      height: 200px;
    }

    & > p {
      color: ${Color.RED_100};
    }
  }
`

const Image = styled.img`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  box-sizing: box-sizing;
  border-radius: 1024px;
  object-fit: cover;
`

const BackgroundImageEffect = styled.div<{ selected: boolean }>`
  position: absolute;
  top: 40%;
  left: 50%;
  width: 65px;
  height: 65px;
  background-color: ${Color.GRAY_900};
  border-radius: 1024px;
  transform: translate(-50%, -50%);
  transition: width 0.4s ease-in-out, height 0.4s ease-in-out;

  ${props => props.selected ? `
    width: 200px;
    height: 200px;
  ` : ``}
`

const OverlayText = styled.p<{ selected: boolean }>`
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translate(-50%, 0);
  font-size: 14px;
  z-index: 3;
  white-space: nowrap;
  font-weight: 600;
  color: ${Color.GRAY_900};
  transition: color 0.6s ease-in;

  ${props => props.selected ? `
    color: ${Color.RED_100};
  ` : ``}
`

const ProfileBadge: React.VFC<{ selected?: boolean; onMoveIndex: () => void }> = ({ selected, onMoveIndex }) => {
  return (
    <Profile onClick={onMoveIndex}>
      <BackgroundImageEffect selected={selected} />
      <Image srcSet={ProfileImage} loading='eager' />
      <OverlayText selected={selected}>나에 대하여</OverlayText>
    </Profile>
  )
}

export default ProfileBadge