import React from 'react';
import ProviderGroup from 'ProviderGroup'

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
