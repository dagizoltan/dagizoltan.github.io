import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  container: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  button: {
    padding: theme.spacing(1),
    color: theme.palette.primary.light,
  }
}))

export default useStyles