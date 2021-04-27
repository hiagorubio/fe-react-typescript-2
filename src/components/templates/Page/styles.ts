import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  page: {
    background: theme.palette.background.default,
    minHeight: '100%',
    width: '100%',
  },
}));

export default useStyles;
