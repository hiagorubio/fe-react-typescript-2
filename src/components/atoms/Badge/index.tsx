import { Grid, Typography, WithStyles, withStyles } from '@material-ui/core';
import React from 'react';

import styles from './styles';

interface OwnProps {
  backgroundColor: string;
  color: string;
  text: string;
}

type Badge = OwnProps & WithStyles<typeof styles>;

export const Badge = ({ classes, backgroundColor, color, text }: Badge) => (
  <Grid
    className={classes.badge}
    style={{ backgroundColor, color }}
  >
    <Typography className={classes.text}>{text}</Typography>
  </Grid>
);

export default withStyles(styles)(Badge);
