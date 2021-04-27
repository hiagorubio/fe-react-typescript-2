import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    flexWrap: 'wrap',
    margin: '20px auto',
    maxWidth: '1130px',
  },
  item: {
    backgroundColor: theme.palette.background.paper,
    margin: '10px',
    padding: '20px',
  },
}),
);

export default useStyles;
