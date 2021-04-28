import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() =>
  createStyles({
    detailsContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
    detailsTextContainer: {
      display: 'flex',
      flexDirection: 'column',
      paddingLeft: 6,
    },
    detailsUser: {
      display: 'flex',
      flexDirection: 'row',
    },
    label: {
      color: '#999999',
      fontSize: '12px',
      padding: '10px 0',
    },
    root: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
    },
    stepperArea: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    stepperCircle: {
      backgroundColor: '#FFFFFF',
      border: '2px solid #D2D2D2',
      borderRadius: '100%',
      height: 6,
      margin: '0px 10px',
      width: 6,
    },
    stepperPostLine: {
      borderLeft: '2px solid #D2D2D2',
      minHeight: '48px',
    },
    stepperPreLine: {
      borderLeft: '2px solid #D2D2D2',
      minHeight: '14px',
    },
    text: {
      fontSize: '12px',
    },
  }),
);
