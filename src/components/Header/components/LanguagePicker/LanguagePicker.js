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
            <ButtonGroup size='small' variant='text' className={classes.buttonGroup}>
              <Button onClick={() => { setLanguage('en') }}>{_('English')}</Button>
              <Button onClick={() => { setLanguage('hu') }}>{_('Hungarian')}</Button>
            </ButtonGroup>
          </>
        )
      }}
    </LocaleContext.Consumer>
  )
}

export default LanguagePicker
