import React from 'react'
import { Box,Container, Typography } from '@material-ui/core'
import { LanguageList } from './components'
import useStyles from './useStyles'

const languages = [
    {
        name: 'English',
        level: 'Fluent'
    },
    {
        name: 'German',
        level: 'Intermediate'
    },
    {
        name: 'Hungarian',
        level: 'Native'
    }
]

function LanguageAbility (props) {
    const classes = useStyles()
    return (
            <Box id='languageAbility' className={classes.container}>
                <Container>
                    <Typography variant='h2' >Language Ability</Typography>
                    <LanguageList items={languages} />
                </Container>
            </Box>
    )
}

export default LanguageAbility
