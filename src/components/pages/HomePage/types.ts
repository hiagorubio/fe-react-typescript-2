import { ConnectedProps, connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Dispatch, bindActionCreators } from 'redux';

import * as userActions from '../../../redux/modules/users/actions';
import { State } from '../../../redux/types';

const mapStateToProps = (state: State) => ({
  since: state?.usersStore?.since,
  users: state?.usersStore?.users,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({
    fetchUsers: userActions.fetchUsers,
    setUser: userActions.setUser,
  }, dispatch);

export const connector = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export type Props = State & ConnectedProps<typeof connector>
  & RouteComponentProps;
