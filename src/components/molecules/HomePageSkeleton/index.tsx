import { Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React from 'react';

import useStyles from './styles';

const HomePageSkeleton = () => {
  const classes = useStyles();
  const skeletons = [];

  for (let index = 0; index < 30; index++) {
    skeletons.push(
      <Grid item xs={12} sm={6} md={4} key={index}>
          <Skeleton variant="rect" className={classes.skeleton} width="288" height="160"/>
        </Grid>,
    );
  }

  return (
    <Grid container className={classes.container} spacing={2}>
      {skeletons}
    </Grid>
  );
};

export default HomePageSkeleton;
