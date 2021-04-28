import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  content: {
    margin: 'auto',
    maxWidth: '1130px',
  },
  page: {
    background: theme.palette.background.default,
    minHeight: '100%',
    width: '100%',
  },
}));

export default useStyles;
