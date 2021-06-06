import React from 'react'
import classNames from 'classnames'

import useDB from '../hooks/useDB'

import Card from '../layouts/Card'

const Awards = ({ className }) => {
  const classProps = classNames(className)
  const { awards } = useDB()

  return (
    <Card title='수상' className={classProps}>
      {awards.list.map((award, index) => (
        <span key={`award-${index}`}>
          {award.title}
        </span>
      ))}
    </Card>
  )
}

export default Awards
