import { Grid } from '@material-ui/core';
import React, { useCallback, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { RoutesEnum } from '../../../routes';
import { HomePageSkeleton, UserCard } from '../../molecules';
import { Page } from '../../templates';

import useStyles from './styles';
import { Props, connector } from './types';

const HomePage = ({ history, fetchUsers, users , setSelectedUser , since }: Props) => {
  const classes = useStyles();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (since === 0 || since > users.length) {
      fetchUsers();
    }
  }, [fetchUsers]);

  const handleClick = useCallback(
    user => {
    setSelectedUser(user);
    history.push(RoutesEnum.DETAILS_PAGE);
    }, [history.push],
  );

  return (
    <Page>
      <InfiniteScroll
        dataLength={users.length}
        hasMore
        next={() => { fetchUsers(); }}
        loader={
          <HomePageSkeleton />
        }
        style={{ overflow: 'hidden' }}
      >
        <Grid container className={classes.users} spacing={2}>
          {users.map(user => (
            <Grid item xs={12} sm={6} md={4} key={user.id}>
              <UserCard
                onClick={() => handleClick(user)}
                login={user.login}
                avatarUrl={user.avatarUrl}
                gitHubPage={user.gitHubPageUrl}
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
