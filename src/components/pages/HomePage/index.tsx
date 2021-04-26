import { CircularProgress, Grid, withStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import { fetchUsers } from '../../../redux/modules/users';
import { UserCard } from '../../molecules';
import { Page } from '../../templates';

import styles from './styles';
import { Props } from './types';

export const HomePage = ({ classes, fetchUsers, users }: Props) => {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <Page>
      <InfiniteScroll
        dataLength={users.length}
        hasMore
        next={() => fetchUsers()}
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
                onClick={() => {}}
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

const mapStateToProps = (state: State) => ({
  users: state.usersStore.users,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ fetchUsers }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(HomePage));
