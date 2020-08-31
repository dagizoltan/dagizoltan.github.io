import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  button: {
    padding: theme.spacing(1),
    color: theme.palette.primary.light,
    borderColor: theme.palette.primary.light,
  }
}))

export default useStyles