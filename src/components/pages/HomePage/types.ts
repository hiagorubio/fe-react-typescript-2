import { ConnectedProps, connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Dispatch, bindActionCreators } from 'redux';

import * as userActions from '../../../redux/modules/users/reducer';
import { User } from '../../../redux/modules/users/types';
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

export interface DispatchProps {
  users: User[];
  since: number;
  fetchUsers(since: number): void;
  setUser(user: User): void;
}

export type Props = State & DispatchProps & ConnectedProps<typeof connector>
  & RouteComponentProps;
