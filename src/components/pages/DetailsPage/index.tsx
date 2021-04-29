import { Grid } from '@material-ui/core';
import React, { useCallback, useEffect } from 'react';
import { withRouter } from 'react-router';

import { RoutesEnum } from '../../../routes';
import { History, Profile, Repositories } from '../../organisms';
import { Page } from '../../templates';

import useStyles from './styles';
import { Props, connector } from './types';

export const DetailsPage = ({ history, user, fetchUserEvents, fetchUserRepos }: Props) => {
    const handleBack = useCallback(
    () => {
      history.push({ pathname: RoutesEnum.ROOT, state: { back: true } });
    },
    [history.push],
  );
    const classes = useStyles();

    useEffect(() => {
      fetchUserEvents(user.login);
    }, [fetchUserEvents]);

    useEffect(() => {
      console.log('LOG >>> ~ file: index.tsx ~ line 27 ~ useEffect ~ user.login', user.login);
      fetchUserRepos(user.login);
    }, [fetchUserRepos]);

    return (
    <Page
      useBackButton
      onClickBack={handleBack}
    >
      <Grid container className={classes.container}>
        <Grid item xs={12} className={classes.item}>
          <Profile user={user} />
          <Repositories />
        </Grid>
        <Grid item xs={12} className={classes.item}>
          <History />
        </Grid>
      </Grid>
    </ Page >
  );
};

export default withRouter(connector(DetailsPage));
