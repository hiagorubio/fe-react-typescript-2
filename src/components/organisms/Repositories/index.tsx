import { Grid, Typography, withStyles } from '@material-ui/core';
import React from 'react';

import styles from './styles';
import { Props } from './types';

const Repositories = ({ classes, repositoriesCount = 14 }: Props) => {
  return (
    <Grid container direction="column">
      <Typography className={classes.title}>Repositories</Typography>
      <Typography className={classes.count}>Repositories count: <span className={classes.countValue}>{repositoriesCount}</span></Typography>
      <Typography className={classes.count}>Repositories list:</Typography>
    </Grid>
  );
};

export default withStyles(styles)(Repositories);
