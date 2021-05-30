import React from 'react'
import classNames from 'classnames'

import useDB from '../hooks/useDB'

import Card from '../layouts/Card'

import * as styles from './style.module.css'

const Speakers = ({ className }) => {
  const classProps = classNames(styles.speakers, className)
  const { speaker } = useDB()

  return (
    <Card title='발표로 지식을 공유' className={classProps}>
      <p className={styles.title}>{speaker.description}</p>
      {speaker.list.map((speaker, index) => (
        <a href={speaker.url} className={styles.speaker}>
          <span className={styles.text} key={`speaker-${index}`}>
            {speaker.title}
          </span>
        </a>
      ))}
    </Card>
  )
}

export default Speakers
