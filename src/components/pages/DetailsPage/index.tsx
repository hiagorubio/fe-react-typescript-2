import { Grid, withStyles } from '@material-ui/core';
import React, { useCallback } from 'react';
import { withRouter } from 'react-router';

import { Profile, Repositories } from '../../organisms';
import { Page } from '../../templates';

import styles from './styles';
import { Props } from './types';

export const DetailsPage = ({ classes, history }: Props) => {
  const handleBack = useCallback(
    () => {
      history.goBack();
    },
    [history.goBack],
  );

  return (
      <Page
        useBackButton
        onClickBack={handleBack}
      >
        <Grid container >
          <Grid item xs={6} className={classes.container}>
            <Profile />
            <Repositories />
          </Grid>
        </Grid>
      </ Page >
  );
};

export default withStyles(styles)(withRouter(DetailsPage));
