import React, { useState } from 'react'
import PaletteContext from './PaletteContext'
import defaultPalette from './palette'

function PaletteProvider (props) {
  const { children } = props

  const [palette, setPalette] = useState(defaultPalette)
  const [type, setType] = useState('light')

  const value = {
    palette,
    setPalette,
    type,
    setType
  }

  return (
    <PaletteContext.Provider value={value}>
      {children}
    </PaletteContext.Provider>
  )
}

export default PaletteProvider
