import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => createStyles({
  loader: {
    height: 'auto',
    width: '100%',
  },
  users: {
    padding: '30px',
  },
}),
);

export default useStyles;
