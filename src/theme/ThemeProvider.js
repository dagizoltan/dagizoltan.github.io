import React from 'react'
import usePalette from './palette/usePalette'
import { createMuiTheme, responsiveFontSizes, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'

function ThemeProvider (props) {
  const { children } = props

  const { palette, type } = usePalette()

  let theme = {
    spacing: [8, 16, 32, 64, 128],
    palette: { ...palette, type },
    shape: {
      borderRadius: 2
    },
    typography: {
      h1: {
        color: palette.primary.light,
        fontSize: '3rem',
        fontWeight: '600',
      },
      h2: {
        color: palette.secondary.main,
        fontSize: '2rem',
        fontWeight: '600'
      },
      h3: {
        color: palette.primary,
        fontSize: '1.545rem',
        fontWeight: '600',  
      },
      h4: {
        color: palette.warning.main,
        fontSize: '0.955rem'
      },
      h5: {
        color: palette.primary.main,
        fontSize: '1.545rem'
      },
      body2: {
        fontSize: '0.955rem'
      }
    }
  }

  theme = createMuiTheme(theme)
  theme = responsiveFontSizes(theme)

  return (
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  )
}

export default ThemeProvider
