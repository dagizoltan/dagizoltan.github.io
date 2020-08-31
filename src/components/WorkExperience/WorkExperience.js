import React from 'react'
import { Box, Container, Typography, } from '@material-ui/core'
import useStyles from './useStyles'
import { WorkExperienceList } from './components'

import workExperienceList from './data'

function WorkExperience(props) {
    const classes = useStyles()
    return (
        <Box id='workExperience' className={classes.container}>
            <Container>
                <Typography variant='h2' >Work Experience</Typography>
                <WorkExperienceList items={workExperienceList} />
                </Container>
            </Box>
    )
}

export default WorkExperience
