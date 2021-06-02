import React from 'react'

interface IProps {
  fill: string
  width: string
  height: string
}

const Reminiscence: React.FC<IProps> = (props) => {
  return (
    <svg {...props} width="32px" height="32px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
      viewBox="0 0 450.497 450.497" enableBackground="new 0 0 450.497 450.497">
      <g>
        <path d="M440.408,83.714c-6.508-6.508-15.172-10.093-24.396-10.093s-17.887,3.584-24.396,10.092l-23.334,23.334l0,0c0,0,0,0,0,0
		l-21.211,21.211c0,0-0.001,0-0.001,0.001s-0.001,0.001-0.001,0.001L195.455,279.876c-0.21,0.21-0.402,0.433-0.582,0.661
		c-0.046,0.059-0.088,0.12-0.133,0.18c-0.136,0.183-0.263,0.37-0.381,0.562c-0.02,0.032-0.045,0.062-0.064,0.095l-44.172,75.021
		c-4.073,4.905-3.813,12.22,0.784,16.819c2.361,2.36,5.5,3.66,8.839,3.66c2.949,0,5.743-1.015,7.982-2.879l75.019-44.17
		c0.036-0.021,0.067-0.048,0.102-0.069c0.188-0.115,0.371-0.24,0.551-0.373c0.062-0.046,0.125-0.088,0.185-0.136
		c0.228-0.18,0.45-0.371,0.66-0.581l151.613-151.613c0,0,0.001,0,0.001,0c0.001-0.001,0.001-0.001,0.001-0.002l44.547-44.547
		C453.859,119.053,453.859,97.166,440.408,83.714z M390.557,161.142l-27.577-27.578l10.606-10.606l27.577,27.577L390.557,161.142z
		 M238.943,312.756l-27.577-27.577l141.007-141.008l27.577,27.577L238.943,312.756z M195.634,340.159l-11.671-11.671l18.344-31.155
		l24.482,24.482L195.634,340.159z M167.252,356.87l8.85-15.031l6.181,6.181L167.252,356.87z M429.801,121.898l-18.031,18.031
		l-27.577-27.577l18.031-18.031c3.676-3.675,8.572-5.699,13.789-5.699s10.113,2.024,13.788,5.699
		c3.676,3.675,5.699,8.572,5.699,13.789S433.477,118.223,429.801,121.898z"/>
        <path d="M109.164,356.375c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S113.575,356.375,109.164,356.375z" />
        <path d="M58.582,356.375c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S62.993,356.375,58.582,356.375z" />
        <path d="M8,356.375c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S12.411,356.375,8,356.375z" />
      </g>
    </svg>
  )
}

export default Reminiscence