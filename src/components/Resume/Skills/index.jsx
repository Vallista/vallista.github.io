import React from 'react'
import classNames from 'classnames'

import useDB from '../hooks/useDB'

import Card from '../layouts/Card'
import Section from '../layouts/Section'

import * as styles from './style.module.css'

const Skills = ({ className }) => {
  const classProps = classNames(styles.skills, className)
  const { skills } = useDB()

  const Description = ({ title, subTitle }) => (
    <ul className={styles.description}>
      <li className={styles.title}>{title}</li>
      <div className={styles.subTitles}>
        {subTitle.map((st, index) => (
          <span className={styles.subTitle} key={`subtitle-${index}`}>
            {st}
          </span>
        ))}
      </div>
    </ul>
  )

  const Skill = ({ title, descriptions }) => (
    <Section className={styles.skill}>
      <span className={styles.title}>{title}</span>
      <div className={styles.descriptions}>{descriptions.map((description) => Description(description))}</div>
    </Section>
  )

  return (
    <Card className={classProps} title={skills.title}>
      {skills.list.map((skill) => Skill(skill))}
    </Card>
  )
}

export default Skills
