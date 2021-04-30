import { ConnectedProps, connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Dispatch, bindActionCreators } from 'redux';

import * as userActions from '../../../redux/modules/users/actions';
import { State } from '../../../redux/types';

const mapStateToProps = (state: State) => ({
  user: state.usersStore.selectUser,
  userEventsLoading: state.usersStore.userEventsLoading,
  userReposLoading: state.usersStore.userReposLoading,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({
    fetchUserEvents: userActions.fetchUserEvents,
    fetchUserRepos: userActions.fetchUserRepos,
  }, dispatch);

export const connector = connect(mapStateToProps, mapDispatchToProps);

export type Props = RouteComponentProps & State & ConnectedProps<typeof connector>;
