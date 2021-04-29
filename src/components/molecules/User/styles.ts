import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  avatarArea: {
    borderTRadius: '4px',
    marginRight: '12px',
  },
  detailsArea: {
    height: '100%',
  },
  idArea: {
    alignItems: 'center',
    display: 'flex',
  },
  idText: {
    color: '#999999',
    fontSize: '12px',
  },
  loginText: {
    color: '#262626',
    fontSize: '18px',
    maxWidth: '12vw',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '40vw',
    },
  },
  loginTextArea: {
    marginBottom: '6px',
  },
  text: {
    alignItems: 'center',
    color: '#999999',
    display: 'flex',
    fontSize: '12px',
  },
  userCard: {
    minHeight: '76px',
  },
}),
);

export default useStyles;
