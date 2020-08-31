import React from 'react'
import { Box, Container, Grid, Typography, Link } from '@material-ui/core'
import { EducationList } from './components'
import useStyles from './useStyles'

function Education (props) {
    const classes = useStyles()

    const educationList = [
        {
            fact: 'Automotive Engineering',
            school: 'Budapest University of Technology and Economics',
            from: '2011 September',
            to: '2014 June'
        },
        {
            fact: 'High School',
            school: 'Kempelen Farkas 8-Year High School',
            from: '2003 September',
            to: '2011 June'
        },
        {
            fact: 'Classical Guitar and Music Theory',
            school: 'Local Music School',
            from: '2000 September',
            to: '2010 June',
        }
    ]

    return (
            <Box id='education' className={classes.container}>
                <Container>
                    <Typography variant='h2'>Education</Typography>
                    <EducationList items={educationList} />
                </Container>
            </Box>
    )
}

export default Education
