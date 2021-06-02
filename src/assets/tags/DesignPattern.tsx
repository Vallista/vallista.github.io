import React from 'react'

interface IProps {
  fill: string
  width: string
  height: string
}

const DesignPattern: React.FC<IProps> = (props) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      x="0" y="0"
      viewBox={`0 0 512 512`}
      fill={props.fill}
      style={{ transition: 'fill 0.3s ease-in-out' }}
    >
      <g>
        <g>

          <rect x="258.853" y="278.423" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -167.0951 308.9444)" width="61.056" height="155.502" />
        </g>
      </g>
      <g>
        <g>
          <polygon points="389.565,413.174 346.391,456.348 402.044,512 488.391,512 		" />
        </g>
      </g>
      <g>
        <g>
          <rect x="78.073" y="258.866" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -158.9932 194.9457)" width="155.502" height="61.056" />
        </g>
      </g>
      <g>
        <g>

          <rect x="192.082" y="78.071" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -44.9817 203.048)" width="61.056" height="155.502" />
        </g>
      </g>
      <g>
        <g>
          <polygon points="413.174,122.435 456.348,165.609 512,109.956 512,23.609 		" />
        </g>
      </g>
      <g>
        <g>
          <polygon points="189.217,346.391 23.609,512 109.956,512 232.391,389.565 		" />
        </g>
      </g>
      <g>
        <g>
          <polygon points="109.956,0 23.609,0 122.435,98.826 165.609,55.652 		" />
        </g>
      </g>
      <g>
        <g>
          <polygon points="402.044,0 279.609,122.435 322.783,165.609 488.391,0 		" />
        </g>
      </g>
      <g>
        <g>
          <polygon points="157.174,0 256,98.826 354.826,0 		" />
        </g>
      </g>
      <g>
        <g>
          <polygon points="256,413.174 157.174,512 354.826,512 		" />
        </g>
      </g>
      <g>
        <g>

          <rect x="278.421" y="192.073" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -53.0824 317.0498)" width="155.502" height="61.056" />
        </g>
      </g>
      <g>
        <g>
          <polygon points="413.174,256 512,354.826 512,157.174 		" />
        </g>
      </g>
      <g>
        <g>
          <polygon points="389.565,279.609 346.391,322.783 512,488.391 512,402.044 		" />
        </g>
      </g>
      <g>
        <g>
          <polygon points="0,23.609 0,109.956 122.435,232.391 165.609,189.217 		" />
        </g>
      </g>
      <g>
        <g>
          <polygon points="55.652,346.391 0,402.044 0,488.391 98.826,389.565 		" />
        </g>
      </g>
      <g>
        <g>
          <polygon points="0,157.174 0,354.826 98.826,256 		" />
        </g>
      </g>
    </svg>
  )
}

export default DesignPattern