import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => createStyles({
  container: {
    margin: 0,
    overflow: 'hidden',
    padding: '0 30px',
    width: '100%',
  },
  skeleton: {
    height: '100%',
    width: '100%',
  },
}),
);

export default useStyles;
