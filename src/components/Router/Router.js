import React from 'react'

import { AppBar, Box,ButtonGroup, Button, Container, Grid, Toolbar, Link } from '@material-ui/core'

import {
  LanguagePicker, ColorModeSwitch
} from './components'

import {
  Brightness2 as MoonIcon
} from '@material-ui/icons'


import useStyles from './useStyles'

function Router () {
  const classes = useStyles()
    const routes = [
      {
        name: 'About',
        href: '#about'
      },
      {
        name: 'Work Experience',
        href: '#workExperience'
      },
      {
        name: 'Projects',
        href: '#projects'
      },
      {
        name: 'Education',
        href: '#education'
      },
      {
        name: 'Language Ability',
        href: '#languageAbility'
      },
      {
        name: 'Personal Interests',
        href: '#personalInterests'
      }
    ]
    return (
      <AppBar position="sticky">
          <Container>
            <Grid
                  container
                  direction='row'
                  justify='space-between'
                  alignItems='center'
            >
              <ButtonGroup
                variant='text'
                color='inherit'
              >
                {
                  routes.map(route => (
                    <Link href={route.href} underline='none'>
                      <Button className={classes.button}>
                        {route.name}
                      </Button>
                    </Link>
                  ))
                }
              </ButtonGroup>
              <Grid item>
              <Grid
                  container
                  direction='row'
                  justify='flex-end'
                  alignItems='center'
              >
                  <MoonIcon />
                  <ColorModeSwitch />
                  <LanguagePicker />
              </Grid>
              </Grid>
            </Grid>

          </Container>
        </AppBar>
    )
}

export default Router
