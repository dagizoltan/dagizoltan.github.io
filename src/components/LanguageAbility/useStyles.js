import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(3),
    background: theme.palette.primary.dark,
    color: theme.palette.primary.light
  }
}))

export default useStyles