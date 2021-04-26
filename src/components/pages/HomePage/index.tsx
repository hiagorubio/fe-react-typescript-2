import { CircularProgress, Grid, withStyles } from '@material-ui/core';
import React, { useCallback, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { RoutesEnum } from '../../../routes';
import { UserCard } from '../../molecules';
import { Page } from '../../templates';

import styles from './styles';
import { Props, connector } from './types';

export const HomePage = ({ history, classes, fetchUsers, users }: Props) => {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const fetchUsersCallback = useCallback(
    () => {
      fetchUsers();
    },
    [fetchUsers],
  );

  const handleClick = useCallback(
    () => {
       history.push(RoutesEnum.DETAILS_PAGE);
    }, [history.push],
  );

  return (
    <Page>
      <InfiniteScroll
        dataLength={users.length}
        hasMore
        next={fetchUsersCallback}
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
                onClick={handleClick}
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

export default withStyles(styles)(connector(HomePage));
