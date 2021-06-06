import React from 'react'
import classNames from 'classnames'

import useDB from '../hooks/useDB'

import Card from '../layouts/Card'

const Activities = ({ className }) => {
  const classProps = classNames(className)
  const { activities } = useDB()

  return (
    <Card title='활동' className={classProps}>
      <ul style={{paddingLeft: '24px'}}>
      {activities.list.map((activity, index) => (
        <li>
          <span key={`activity-${index}`} style={{fontSize: '16px'}}>
            {activity.title}
          </span>
        </li>
      ))}
      </ul>
    </Card>
  )
}

export default Activities
