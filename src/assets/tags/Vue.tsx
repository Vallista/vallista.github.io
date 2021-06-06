import React from 'react'

interface IProps {
  fill: string
  width: string
  height: string
}

const Vue: React.FC<IProps> = (props) => {
  return (
    <svg {...props} viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>Vue.js icon</title><path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z" /></svg>
  )
}

export default Vue