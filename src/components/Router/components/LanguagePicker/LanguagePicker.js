import React from 'react'
import LocaleContext from 'core/locale/LocaleContext'

import {
  Button,
  ButtonGroup,
  Typography
} from '@material-ui/core'
import useStyles from './useStyles'

function LanguagePicker (props) {
  const classes = useStyles()
  
  return (
    <LocaleContext.Consumer>
      {context => {
        const { _, setLanguage } = context
        return (
          <>
            <ButtonGroup size='small' variant='text'>
              <Button className={classes.button} onClick={() => { setLanguage('en') }}>{_('En')}</Button>
              <Button className={classes.button} onClick={() => { setLanguage('hu') }}>{_('Hun')}</Button>
            </ButtonGroup>
          </>
        )
      }}
    </LocaleContext.Consumer>
  )
}

export default LanguagePicker
