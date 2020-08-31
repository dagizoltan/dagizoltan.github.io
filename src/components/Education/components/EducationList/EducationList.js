import React from 'react'
import { Grid } from '@material-ui/core'
import EducationListItem from './EducationListItem'
import useStyles from './useStyles'

function EducationList (props) {
    

    const {
        items
    } = props

    const classes = useStyles()

    if (!items) return null
    return (
        <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="stretch"
            className={classes.grid}
        >
            {items.map(props => <EducationListItem {...props} />)}
        </Grid>
    )
}   

export default EducationList
