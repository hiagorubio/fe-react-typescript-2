import { Button, Grid, Typography, withStyles } from '@material-ui/core';
import React from 'react';

import { GitHubMarkIcon } from '../../../assets/Icons';

import styles from './styles';
import { Props } from './types';

const Header = ({ classes, onClickBack, useBackButton }: Props) => (
  <Grid
    container
    direction="row"
    justify="space-between"
    className={classes.headerContainer}
    alignItems="center"
  >
    <Grid item xs={1}>
      {useBackButton && (<Button onClick={onClickBack}>
          <Typography className={classes.backButton}>Back</Typography>
        </Button>)}
    </Grid>
    <Grid item xs={11}>
      <Grid container direction="row" justify="center">
        <Typography className={classes.title}>
          <GitHubMarkIcon size="32"/>
          GitHub Users
        </Typography>
      </Grid>
    </Grid>
  </Grid>
);

export default withStyles(styles)(Header);
