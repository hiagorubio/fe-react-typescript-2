import { WithStyles } from '@material-ui/core';
import { ConnectedProps, connect } from 'react-redux';

import { State } from '../../../redux/types';

import styles from './styles';

const mapStateToProps = (state: State) => ({
  userRepos: state.usersStore.userRepos,
});

export const connector = connect(
  mapStateToProps,
);

export type Props = WithStyles<typeof styles> & ConnectedProps<typeof connector>;
