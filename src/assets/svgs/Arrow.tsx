import React from 'react'

interface IProps {
  fill?: string
  width?: string | number
  height?: string | number
}

const Arrow: React.FC<IProps> = (props) => {
  const fill = props.fill ?? '#fff'

  return (
    <svg
      width={props.width ?? 24}
      height={props.height ?? 24}
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      x="0" y="0"
      viewBox={`0 0 512 512`}
      fill={fill}
      style={{ transition: 'fill 0.3s ease-in-out' }}
    >
      <g
        id="layer1"
        transform="translate(0,-540.3622)">
        <path
          fill={fill}
          d="M 72.71772,732.21344 255.99937,915.49506 439.28228,732.21344 384.29689,677.22934 255.99937,805.52686 127.70315,677.22934 z"
          id="path3766-1" />
      </g>
    </svg>
  )
}

export default Arrow