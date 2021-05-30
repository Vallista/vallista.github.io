import { useState } from 'react'

import DB from '../../DB.json'

function useDB() {
  const [ careers ] = useState(DB.careers)
  const [ config ] = useState(DB.config)
  const [ skills ] = useState(DB.skills)
  const [ hobby ] = useState(DB.hobby)
  const [ speaker ] = useState(DB.speaker)
  const [ activities ] = useState(DB.activities)
  const [ lectures ] = useState(DB.lectures)
  const [ awards ] = useState(DB.awards)

  return {
    careers,
    config,
    skills,
    hobby,
    speaker,
    activities,
    lectures,
    awards
  }
}

export default useDB
