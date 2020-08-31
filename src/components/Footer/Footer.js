import React from 'react'

import { Box,Container } from '@material-ui/core'
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab' 

import LinkedInIcon from '@material-ui/icons/LinkedIn';

import useStyles from './useStyles'

function Router () {
  const classes = useStyles()

    return (
        <Box className={classes.container}>
          <Container>
          <ToggleButtonGroup
            variant='text'
            color='#ffffff'
            exclusive
          >
            <ToggleButton value="left" aria-label="left aligned">
              About
            </ToggleButton>
            <ToggleButton value="center" aria-label="centered">
              Work Experience
            </ToggleButton>
            <ToggleButton value="right" aria-label="right aligned">
              Projects
            </ToggleButton>
            <ToggleButton value="justify" aria-label="justified">
              LanguageAbility
            </ToggleButton>
            <ToggleButton value="justify" aria-label="justified">
              Personal Interests
            </ToggleButton>
          </ToggleButtonGroup>
          </Container>
        </Box>
    )
}

export default Router
