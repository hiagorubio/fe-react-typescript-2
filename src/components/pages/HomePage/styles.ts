import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => createStyles({
  loader: {
    height: '100%',
    width: '100%',
  },
  users: {
    margin: 'auto',
    maxWidth: '1130px',
    padding: '30px',
  },
}),
);

export default useStyles;
