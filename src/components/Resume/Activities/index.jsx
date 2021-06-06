import React from 'react'
import classNames from 'classnames'

import useDB from '../hooks/useDB'

import Card from '../layouts/Card'

const Activities = ({ className }) => {
  const classProps = classNames(className)
  const { activities } = useDB()

  return (
    <Card title='활동' className={classProps}>
      {activities.list.map((activity, index) => (
        <span key={`activity-${index}`}>
          {activity.title}
        </span>
      ))}
    </Card>
  )
}

export default Activities
