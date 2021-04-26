import { WithStyles } from '@material-ui/core';
import { ConnectedProps, connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Dispatch, bindActionCreators } from 'redux';

import * as userActions from '../../../redux/modules/users/reducer';
import { User } from '../../../redux/modules/users/types';
import { State } from '../../../redux/types';

import styles from './styles';

const mapStateToProps = (state: State) => ({
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
  fetchUsers(): void;
  setUser(user: User): void;
}

export type Props = State & DispatchProps & WithStyles<typeof styles> & ConnectedProps<typeof connector>
  & RouteComponentProps;
