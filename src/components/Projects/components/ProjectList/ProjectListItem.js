import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'

function ProjectListItem (props) {
    const {
        name,
        from,
        to,
        note
    } = props
    return (
        <Grid item>
            <Box py={1}>
                <Typography variant='h3'>{name}</Typography>
                <Typography variant='h4'>{from} {to ? (`- ${to}`) : null}</Typography>
                <Typography>{note}</Typography>
            </Box>
        </Grid>
    )
}

export default ProjectListItem
