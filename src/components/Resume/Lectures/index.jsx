import React from 'react'
import classNames from 'classnames'

import useDB from '../hooks/useDB'

import Card from '../layouts/Card'

const Lectures = ({ className }) => {
  const classProps = classNames(className)
  const { lectures } = useDB()

  return (
    <Card title='강연을 통해 널리' className={classProps}>
      {lectures.list.map((lecture, index) => (
        <span key={`lectures-${index}`}>
          {lecture.title}
        </span>
      ))}
    </Card>
  )
}

export default Lectures
