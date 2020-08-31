import React from 'react'
import { Grid } from '@material-ui/core'
import LanguageListItem from './LanguageListItem'
import useStyles from './useStyles'

function LanguageList (props) {
    

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
            {items.map(props => <LanguageListItem {...props} />)}
        </Grid>
    )
}   

export default LanguageList
