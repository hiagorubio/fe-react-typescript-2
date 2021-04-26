import { Grid, Typography, withStyles } from '@material-ui/core';
import React from 'react';

import { User } from '../../molecules';

import styles from './styles';
import { Props } from './types';

const Profile = ({ classes, user }: Props) => {
  return (
    <Grid container direction="column" className={classes.container}>
    <Typography className={classes.title}>Profile</Typography>
      <User
        login={user.login}
        avatarUrl={user.avatar_url}
        gitHubPage={user.html_url}
        id={user.id}
        imageSize={'120'}
      />
    </Grid>
  );
};

export default withStyles(styles)(Profile);
