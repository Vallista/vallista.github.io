import React from 'react'

interface IProps {
  fill: string
  width: string
  height: string
}

const All: React.FC<IProps> = (props) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      x="0" y="0"
      viewBox={`0 0 100 100`}
      fill={props.fill}
      style={{ transition: 'fill 0.3s ease-in-out' }}
    >
      <g transform="translate(0,-952.36218)">
        <path
          d="m 13.118798,958.36219 c -3.91,0 -7.1188,3.22206 -7.1188,7.13406 l 0,25.94094 c 0,3.91201 3.2088,7.13406 7.1188,7.13406 l 25.8637,0 c 3.9101,0 7.1188,-3.2221 7.1188,-7.13406 l 0,-25.94094 c 0,-3.91195 -3.2087,-7.13406 -7.1188,-7.13406 l -25.8637,0 z"
          fill={props.fill} fill-opacity="1" fill-rule="evenodd" stroke="none" visibility="visible"
          display="inline" overflow="visible" />
        <path
          d="m 61.017198,958.36219 c -3.9039,0 -7.1187,3.21739 -7.1187,7.13406 l 0,25.94094 c 0,3.91667 3.2148,7.13406 7.1187,7.13406 l 25.8738,0 c 3.903904,0 7.109004,-3.2221 7.109004,-7.13406 l 0,-25.94094 c 0,-3.91195 -3.2051,-7.13406 -7.109004,-7.13406 l -25.8738,0 z"
          fill={props.fill} fill-opacity="1" fill-rule="evenodd" stroke="none" visibility="visible"
          display="inline" overflow="visible" />
        <path
          d="m 13.118798,1006.1431 c -3.9148,0 -7.1188,3.2283 -7.1188,7.1341 l 0,25.9509 c 0,3.9059 3.204,7.1341 7.1188,7.1341 l 25.8637,0 c 3.9149,0 7.1188,-3.2283 7.1188,-7.1341 l 0,-25.9509 c 0,-3.9058 -3.2039,-7.1341 -7.1188,-7.1341 l -25.8637,0 z"
          fill={props.fill} fill-opacity="1" fill-rule="evenodd" stroke="none" visibility="visible"
          display="inline" overflow="visible" />
        <path
          d="m 61.017198,1006.1431 c -3.9087,0 -7.1187,3.2236 -7.1187,7.1341 l 0,25.9509 c 0,3.9105 3.21,7.1341 7.1187,7.1341 l 25.8738,0 c 3.908704,0 7.109004,-3.2283 7.109004,-7.1341 l 0,-25.9509 c 0,-3.9058 -3.2003,-7.1341 -7.109004,-7.1341 l -25.8738,0 z"
          fill={props.fill} fill-opacity="1" fill-rule="evenodd" stroke="none" visibility="visible"
          display="inline" overflow="visible" />
      </g>
    </svg>
  )
}

export default All;
