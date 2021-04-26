import { WithStyles } from '@material-ui/core';

import styles from './styles';

export interface OwnProps {
  repositoriesCount: number;
}

export type Props = WithStyles<typeof styles> & OwnProps;
