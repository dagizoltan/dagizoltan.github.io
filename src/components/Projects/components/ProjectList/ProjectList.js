import React from 'react'
import { Grid } from '@material-ui/core'
import ProjectListItem from './ProjectListItem'
import useStyles from './useStyles'

function ProjectList (props) {

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
            className={classes.grid}
        >
            {items.map(props => <ProjectListItem {...props} />)}
        </Grid>
    )
}   

export default ProjectList
