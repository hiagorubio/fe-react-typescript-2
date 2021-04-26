import { WithStyles } from '@material-ui/core';
import { User } from 'src/redux/modules/users/types';

import styles from './styles';

interface OwnProps {
  user: User | {};
}

export type Props = WithStyles<typeof styles> & OwnProps;
