import { WithStyles } from '@material-ui/core';

import styles from './styles';

export interface OwnProps {
  onClickBack?: () => void;
  useBackButton?: boolean;
}

export type Props = WithStyles<typeof styles> & OwnProps & React.HtmlHTMLAttributes<HTMLElement>;
