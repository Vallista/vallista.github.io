import React from 'react'
import classNames from 'classnames'

import * as styles from './style.module.css'

const Card = ({ title, children, className }) => {
  const classProps = classNames(styles.card, className)
  const headerProps = classNames(styles.header, !!title && styles.blank)

  return (
    <div className={classProps}>
      <div className={headerProps}>
        <h1 className={styles.title}>{title}</h1>
        <h1 className={styles.point}>.</h1>
      </div>
      <div className={styles.contents}>{children}</div>
    </div>
  )
}

export default Card
