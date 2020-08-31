import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(4),
    background: theme.palette.primary.dark,
    //backgroundImage: 'url(' + require('./background.svg') + ')',
    backgroundSize: 'cover',
    backgroundPosition: 0.5
  },
  settingsContainer: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  titleContainer: {
    marginBottom: theme.spacing(3)
  }
}))

export default useStyles