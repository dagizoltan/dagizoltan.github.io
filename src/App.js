import React from 'react';
import ProviderGroup from 'ProviderGroup'
import { Box } from '@material-ui/core'
import {
  Header,
  Router,
  WorkExperience,
  Projects,
  Education,
  LanguageAbility,
  PersonalInterests,
  Footer
} from 'components'

import { Typography } from '@material-ui/core'

function App() {
  return (
    <ProviderGroup>
      <Header />
      <Router />
      <WorkExperience />
      <Projects />
      <Education />
      <LanguageAbility />
      <PersonalInterests />
    </ProviderGroup>
  )
}

export default App
