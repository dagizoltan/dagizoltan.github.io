import { useContext } from 'react'
import LocaleContext from './LocaleContext'

function useLocale () {
  return useContext(LocaleContext)
}

export default useLocale
