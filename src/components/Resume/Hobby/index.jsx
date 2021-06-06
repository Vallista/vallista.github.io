import React from 'react'
import classNames from 'classnames'

import useDB from '../hooks/useDB'

import Card from '../layouts/Card'

import * as styles from './style.module.css'

const Lectures = ({ className }) => {
  const classProps = classNames(styles.hobbies, className)
  const linkProps = classNames(styles.link, styles.active)
  const { hobby } = useDB()

  const Description = (description) => <span className={styles.description}>{description}</span>

  return (
    <Card title='취미' className={classProps}>
      {hobby.list.map((ho, index) => (
        <div className={styles.hobby}>
          {!!ho.url ? (
            <a className={linkProps} href={ho.url}>
              <span className={styles.title} key={`hobby-${index}`} style={{ fontSize: 24 }}>
                {ho.title}
              </span>
            </a>
          ) : (
            <span className={styles.title} key={`hobby-${index}`} style={{ fontSize: 24 }}>
              {ho.title}
            </span>
          )}
          <ul className={styles.descriptions}>
            {ho.descriptions.map((description) => <li>{Description(description)}</li>)}
          </ul>
        </div>
      ))}
    </Card>
  )
}

export default Lectures
