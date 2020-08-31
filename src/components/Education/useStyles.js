import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(3),
    color: theme.palette.text.primary,
  },
  grid: {
    marginTop: theme.spacing(2)
  }
}))

export default useStyles