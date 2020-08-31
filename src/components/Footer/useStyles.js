import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  container: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    background: theme.palette.primary.main,
  }
}))

export default useStyles