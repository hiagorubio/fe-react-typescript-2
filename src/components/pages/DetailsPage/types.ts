import { ConnectedProps, connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import { User } from '../../../redux/modules/users/types';
import { State } from '../../../redux/types';

const mapStateToProps = (state: State) => ({
  user: state.usersStore.selectUser,
});

export const connector = connect(mapStateToProps);

export interface DispatchProps {
  user: User;
}
export type Props = RouteComponentProps & State & ConnectedProps<typeof connector>;
