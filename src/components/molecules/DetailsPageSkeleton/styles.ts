import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    flexWrap: 'wrap',
    margin: '0 auto',
    padding: '20px',
  },
  item: {
    backgroundColor: theme.palette.background.paper,
    margin: '0 auto',
    maxWidth: '45%',
    padding: '20px',
    [theme.breakpoints.down('sm')]: {
      margin: '20px auto',
      maxWidth: '100%',
    },
  },
}),
);

export default useStyles;
