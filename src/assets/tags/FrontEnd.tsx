import React from 'react'

interface IProps {
  fill: string
  width: string
  height: string
}

const FrontEnd: React.FC<IProps> = (props) => {
  return (
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
      viewBox="0 0 512 512" enableBackground="new 0 0 512 512" {...props}>
      <g>
        <g>
          <polygon points="478.609,55.652 478.609,155.826 33.391,155.826 33.391,55.652 0,55.652 0,456.348 33.391,456.348 33.391,189.217 
			478.609,189.217 478.609,456.348 512,456.348 512,55.652 		"/>
        </g>
      </g>
      <g>
        <g>
          <rect x="33.391" y="22.261" width="445.217" height="33.391" />
        </g>
      </g>
      <g>
        <g>
          <rect x="33.391" y="456.348" width="445.217" height="33.391" />
        </g>
      </g>
      <g>
        <g>
          <rect x="411.826" y="89.044" width="33.391" height="33.391" />
        </g>
      </g>
      <g>
        <g>
          <rect x="345.043" y="89.044" width="33.391" height="33.391" />
        </g>
      </g>
      <g>
        <g>
          <rect x="77.913" y="233.739" width="356.174" height="33.391" />
        </g>
      </g>
      <g>
        <g>
          <rect x="77.913" y="311.652" width="178.087" height="33.391" />
        </g>
      </g>
    </svg>
  )
}

export default FrontEnd