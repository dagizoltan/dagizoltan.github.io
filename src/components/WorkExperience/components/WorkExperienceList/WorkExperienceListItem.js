import React from 'react'
import { Grid, Box, Typography } from '@material-ui/core'
import Gallery from '../Gallery'
import useStyles from './useStyles'


function WorkExperienceListItem (props) {
    
    const {
        role,
        company,
        from,
        to,
        tasks,
        tiles
    } = props

    const classes = useStyles()

    return (
        <Grid item className={classes.gridItem}>
            <Box mb={1}>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="flex-start"
                >
                    <Grid item>
                        <Typography variant='h3'>{role}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography color="textSecondary">{from} - {to}</Typography>
                    </Grid>
                </Grid>
                <Typography variant='h4'>{company}</Typography>
            </Box>
            {tasks.map(task => <Typography>{task}</Typography>)}
            {tiles
                ? <Gallery items={tiles} />
                : null
            }
        </Grid>
    )
}

export default WorkExperienceListItem
