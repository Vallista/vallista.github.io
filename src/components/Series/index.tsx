import React from 'react'

interface Props {
  posts: {
    title: string;
    image: string;
    url: string;
  }[]
}

const Series: React.VFC<Props> = (props) => {
  const { } = props

  return (
    <div>
      Series!
    </div>
  )
}

export default Series;