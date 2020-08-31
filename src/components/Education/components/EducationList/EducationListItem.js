import React from 'react'
import { Grid, Typography } from '@material-ui/core'

function EducationListItem (props) {
    const {
        fact,
        school,
        from,
        to
    } = props
    return (
        <Grid item>
            <Typography variant='h3'>{fact}</Typography>
            <Typography variant='h4'>{school}</Typography>
            <Typography variant='caption'>{from} - {to}</Typography>
        </Grid>
    )
}

export default EducationListItem
