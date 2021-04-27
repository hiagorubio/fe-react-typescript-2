import { Grid, Typography, withStyles } from '@material-ui/core';
import React from 'react';

import styles from './styles';
import { Props } from './types';

const History = ({ classes }: Props) => {
  return (
    <Grid container direction="column">
      <Typography className={classes.title}>History</Typography>
    </Grid>
  );
};

export default withStyles(styles)(History);
