import { WithStyles } from '@material-ui/core';
import { ConnectedProps, connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import { User } from '../../../redux/modules/users/types';
import { State } from '../../../redux/types';

import styles from './styles';

const mapStateToProps = (state: State) => ({
  user: state.usersStore.selectUser,
});

export const connector = connect(mapStateToProps);

export interface DispatchProps {
  user: User;
}
export type Props = WithStyles<typeof styles> & RouteComponentProps & State & ConnectedProps<typeof connector>;
