import React, { useState } from 'react'
import LocaleContext from './LocaleContext'

import {
  hu
} from './dictionaries'

const dictionaries = {
  hu: hu
}

function LocaleProvider (props) {
  const { children } = props

  const [language, setLanguage] = useState('en')

  const value = {
    _: (key) => dictionaries[language]
      ? dictionaries[language][key]
        ? dictionaries[language][key]
        : `$$/${key}$$`
      : key,
    __: (obj) => obj[language],
    setLanguage
  }
  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  )
}

export default LocaleProvider