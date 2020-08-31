import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    color: theme.palette.text.primary,
  },
  gridList: {
    background: theme.palette.primary.dark,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  gridItem: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  imageContainer: {
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      width: 0,  /* Remove scrollbar space */
      background: 'transparent'
    }
  },
  imagePicker: {
    background: theme.palette.primary.dark,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },   
  modal: {
    border: 'none',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
      maxWidth: '100vh',
      maxHeight: '100vh',
      border: 'none'
  }
}))

export default useStyles