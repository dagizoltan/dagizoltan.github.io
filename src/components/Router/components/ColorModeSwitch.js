import React, { useState } from 'react'
import { useLocale } from 'core/locale'
import {
  Box,
  Switch
} from '@material-ui/core'

import usePalette from 'theme/palette/usePalette'

function ColorModeSwitch (props) {
  const { _ } = useLocale()

  const { setType } = usePalette()

  const [checked, setChecked] = useState(false)

  const handleChange = (e) => {
    setChecked(e.target.checked)
    if (e.target.checked) setType('dark')
    else setType('light')
  }
  return (
    <Box px={1}>
      <Switch size='small' checked={checked} onChange={handleChange}/>

    </Box>
  )
}

export default ColorModeSwitch
