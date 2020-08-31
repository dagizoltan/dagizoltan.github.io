import React from 'react'
import { Box,Container, Typography, Link } from '@material-ui/core'
import useStyles from './useStyles'

function PersonalInterests (props) {
    const classes = useStyles()
    return (
            <Box id='personalInterests' className={classes.container}>
                <Container>
                    <Typography variant='h2'>Personal Interests</Typography>
                </Container>
            </Box>
    )
}

export default PersonalInterests
