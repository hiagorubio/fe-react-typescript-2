import { WithStyles } from '@material-ui/core';
import { RouteComponentProps } from 'react-router';

import styles from './styles';

export type Props = WithStyles<typeof styles> & RouteComponentProps;
