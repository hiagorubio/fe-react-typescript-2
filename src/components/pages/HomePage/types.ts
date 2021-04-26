import { WithStyles } from '@material-ui/core';

import { User } from '../../../redux/modules/users';
import { State } from '../../../redux/types';

import styles from './styles';

export interface DispatchProps extends WithStyles<typeof styles> {
  users: User[];
  fetchUsers(): void;
}

export type Props = State & DispatchProps;
