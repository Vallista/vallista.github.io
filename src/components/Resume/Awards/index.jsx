import React from 'react'
import classNames from 'classnames'

import useDB from '../hooks/useDB'

import Card from '../layouts/Card'

const Awards = ({ className }) => {
  const classProps = classNames(className)
  const { awards } = useDB()

  return (
    <Card title='수상' className={classProps}>
      <ul style={{paddingLeft: '24px'}}>
      {awards.list.map((award, index) => (
        <li>
          <span key={`award-${index}`} style={{fontSize: '16px'}}>
            {award.title}
          </span>
        </li>
      ))}
      </ul>
    </Card>
  )
}

export default Awards
