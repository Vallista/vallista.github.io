import React from 'react'
import useDB from '../hooks/useDB'
import classNames from 'classnames'

import Card from '../layouts/Card'

import * as styles from './style.module.css'

import GithubIcon from '../../../assets/svgs/github.svg'
import TistoryIcon from '../../../assets/svgs/tistory.svg'

const Introduce = ({ className }) => {
  const classProps = classNames(styles.introduce, className)
  const { config } = useDB()

  return (
    <Card className={classProps} title='이력서'>
      <span className={styles.title1}>{config.role}</span>
      <span className={styles.title2}>{config.name}</span>
      <div className={styles.descriptions}>
        {config.bio?.map((it, index) => (
          <p className={styles.description} key={index}>{it}</p>
        ))}
      </div>
      <div className={styles.iconWrap}>
        <a className={styles.link} href={config.github}>
          <GithubIcon className={styles.img} />
        </a>
        <a className={styles.link2} href={config.blog2}>
          <TistoryIcon className={styles.img} />
        </a>
      </div>
    </Card>
  )
}

export default Introduce
