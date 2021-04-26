import { Grid, Typography, withStyles } from '@material-ui/core';
import React from 'react';

import { User } from '../../molecules';

import styles from './styles';
import { Props } from './types';

const Profile = ({ classes }: Props) => {
  return (
    <Grid container direction="column">
    <Typography className={classes.title}>Profile</Typography>
      <User
        login={'Hiago'}
        avatarUrl={'a'}
        gitHubPage={'www.google.com'}
        id={1}
      />
    </Grid>
  );
};

export default withStyles(styles)(Profile);
