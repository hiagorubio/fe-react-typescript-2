import { Grid } from '@material-ui/core';
import React, { useCallback } from 'react';
import { withRouter } from 'react-router';

import { RoutesEnum } from '../../../routes';
import { History, Profile, Repositories } from '../../organisms';
import { Page } from '../../templates';

import useStyles from './styles';
import { Props, connector } from './types';

export const DetailsPage = ({ history, user }: Props) => {
  const handleBack = useCallback(
    () => {
      history.push({ pathname: RoutesEnum.ROOT, state: { back: true } });
    },
    [history.push],
  );
  const classes = useStyles();

  return (
    <Page
      useBackButton
      onClickBack={handleBack}
    >
      <Grid container className={classes.container}>
        <Grid item xs={6} className={classes.item}>
          <Profile user={user} />
          <Repositories repositoriesCount={14} />
        </Grid>
        <Grid item xs={6} className={classes.item}>
          <History />
        </Grid>
      </Grid>
    </ Page >
  );
};

export default withRouter(connector(DetailsPage));
