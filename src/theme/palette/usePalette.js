import { useContext } from 'react'
import PaletteContext from './PaletteContext'

function usePalette () {
  return useContext(PaletteContext)
}

export default usePalette
