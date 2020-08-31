import React from 'react'
import { Grid, Typography } from '@material-ui/core'

function LanguageListItem (props) {
    const {
        name,
        level
    } = props
    return (
        <Grid item>
            <Typography variant='h3'>{name}</Typography>
            <Typography variant='h4'>{level}</Typography>
        </Grid>
    )
}

export default LanguageListItem
