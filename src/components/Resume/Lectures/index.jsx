import React from 'react'

import useDB from '../hooks/useDB'

import Card from '../layouts/Card'

const Lectures = ({ className }) => {
  const { lectures } = useDB()

  return (
    <Card title='강연' className={className}>
      <>
        {lectures.list.map((lecture, index) => (
          <span key={`lecture-${index}`}>
            {lecture.title}
          </span>
        ))}
      </>
    </Card>
  )
}

export default Lectures
