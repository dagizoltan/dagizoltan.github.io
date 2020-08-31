import React from 'react'
import { Grid } from '@material-ui/core'
import useStyles from './useStyles'
import WorkExperienceListItem from './WorkExperienceListItem'


function WorkExperienceList(props) {



    const {
        items
    } = props

    const classes = useStyles()


    if (!items) return null
    return (
        <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="stretch"

        >

            {items.map(props => <WorkExperienceListItem {...props} />)}
        </Grid>
    )
}

export default WorkExperienceList
