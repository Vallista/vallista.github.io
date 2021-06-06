import React from 'react'

import useDB from '../hooks/useDB'

import Card from '../layouts/Card'

const Lectures = ({ className }) => {
  const { lectures } = useDB()

  return (
    <Card title='강연' className={className}>
      <ul style={{paddingLeft: '24px'}}>
        {lectures.list.map((lecture, index) => (
          <li>
          <span key={`lecture-${index}`} style={{fontSize: '16px'}}>
            {lecture.title}
          </span>
        </li>
        ))}
      </ul>
    </Card>
  )
}

export default Lectures
