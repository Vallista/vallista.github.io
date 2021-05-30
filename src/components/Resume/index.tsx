import React from 'react'

import * as styles from './style.module.css'

import Introduce from './Introduce'
import Hobby from './Hobby'
import Careers from './Careers'
import Skills from './Skills'
import Speakers from './Speakers'
import Activities from './Activities'
import Lectures from './Lectures'
import Awards from './Awards'

const Home = () => {
  return (
    <div className={styles.container}>
      <Introduce className={styles.item} />
      <Careers className={styles.item} />
      <Skills className={styles.item} />
      <Hobby className={styles.item} />
      <Speakers className={styles.item} />
      <Activities className={styles.item} />
      <Lectures className={styles.item} />
      <Awards className={styles.item} />
    </div>
  )
}

export default Home
