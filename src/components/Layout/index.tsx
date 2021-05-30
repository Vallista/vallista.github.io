
import * as React from 'react'
import styled, { css } from 'styled-components'

const Box = styled.div`
  display: flex;
  ${props => css`
    flex-direction: ${props.style?.flexDirection || 'row'};
    justify-content: ${props.style?.justifyContent || 'flex-start'};
    align-items: ${props.style?.alignItems || 'flex-start'};
    background-color: ${props.style?.backgroundColor || 'inherit'};
  `}
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
`

interface IProps extends React.CSSProperties {
}

const Layout: React.FC<IProps> = (props) => {
  const { children, ...otherProps } = props

  return (
    <Box style={otherProps}>
      {children}
    </Box>
  )
}

export default Layout