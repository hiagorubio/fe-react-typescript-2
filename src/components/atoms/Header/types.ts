import { WithStyles } from '@material-ui/core';

import styles from './styles';

interface OwnProps {
  onClickBack: () => void;
  useBackButton: boolean;
}

export type Props = WithStyles<typeof styles> & OwnProps
;
