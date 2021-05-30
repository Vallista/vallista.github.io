import React from 'react'
import useDB from '../hooks/useDB'
import classNames from 'classnames'

import Card from '../layouts/Card'

import * as styles from './style.module.css'

import EmailIcon from '../../../assets/svgs/email.svg'
import GithubIcon from '../../../assets/svgs/github.svg'
import PhoneIcon from '../../../assets/svgs/phone.svg'
import BlogIcon from '../../../assets/svgs/blog.svg'

const Introduce = ({ className }) => {
  const classProps = classNames(styles.introduce, className)
  const { config } = useDB()

  return (
    <Card className={classProps} title='이력서'>
      <span className={styles.title1}>웹 프론트엔드 개발자</span>
      <span className={styles.title2}>마광휘</span>
      {/* <span className={styles.title3}>이력서</span> */}
      <div className={styles.descriptions}>
        <p className={styles.description}>사용자가 좋아하는 서비스를 만들고 싶은 개발자 마광휘입니다.</p>
        <p className={styles.description}>최근에는 프론트엔드, 아키텍쳐, 백오피스에 관심이 많습니다.</p>
      </div>
      <div className={styles.iconWrap}>
        <a className={styles.link} href={config.github}>
          <GithubIcon className={styles.img} />
        </a>
        <a className={styles.link} href={`mailto:${config.email}`}>
          <EmailIcon className={styles.img} />
        </a>
        <a className={styles.link} href={`tel:${config.phone}`}>
          <PhoneIcon className={styles.img} />
        </a>
        <a className={styles.link2} href={config.blog1}>
          <BlogIcon className={styles.img} />
        </a>
        <a className={styles.link2} href={config.blog2}>
          <BlogIcon className={styles.img} />
        </a>
      </div>
    </Card>
  )
}

export default Introduce
