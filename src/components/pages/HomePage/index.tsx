import { CircularProgress, Grid } from '@material-ui/core';
import React, { useCallback, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { RoutesEnum } from '../../../routes';
import { UserCard } from '../../molecules';
import { Page } from '../../templates';

import useStyles from './styles';
import { Props, connector } from './types';

const HomePage = ({ history, fetchUsers, users, setUser , since }: Props) => {
  const classes = useStyles();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetchUsers(since === 0 ? 0 : since + 30);
  }, [fetchUsers]);

  const handleClick = useCallback(
    user => {
      setUser(user);
      history.push(RoutesEnum.DETAILS_PAGE);
    }, [history.push],
  );

  return (
    <Page>
      <InfiniteScroll
        dataLength={users.length}
        hasMore
        next={() => { fetchUsers(since + 30); }}
        loader={
          <Grid
            container
            className={classes.loader}
            justify="center"
            alignItems="center"
          >
            <CircularProgress size="48px" />
          </Grid>
        }
      >
        <Grid container className={classes.users} spacing={2}>
          {users.map(user => (
            <Grid item xs={12} sm={6} md={4} key={user.id}>
              <UserCard
                onClick={() => handleClick(user)}
                login={user.login}
                avatarUrl={user.avatar_url}
                gitHubPage={user.html_url}
                id={user.id}
              />
            </Grid>
          ))}
        </Grid>
      </InfiniteScroll>
    </Page>
  );
};

export default connector(HomePage);
