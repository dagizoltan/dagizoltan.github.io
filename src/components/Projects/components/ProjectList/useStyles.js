import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  grid: {
    marginTop: theme.spacing(2),
    background: theme.palette.primary.dark,
    color: theme.palette.primary.light
  }
}))

export default useStyles