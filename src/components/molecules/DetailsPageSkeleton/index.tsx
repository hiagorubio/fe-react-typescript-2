import { Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React from 'react';

import useStyles from './styles';

const DetailsPageSkeleton = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} className={classes.item}>
        <Skeleton variant="rect" />
      </Grid>
      <Grid item xs={12} className={classes.item}>
          <Skeleton variant="rect" />
      </Grid>
    </Grid>
  );
};

export default DetailsPageSkeleton;
