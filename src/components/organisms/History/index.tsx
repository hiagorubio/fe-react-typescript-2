import { Grid, Typography, withStyles } from '@material-ui/core';
import React from 'react';

import { HistoryStepper } from '../../molecules';

import styles from './styles';
import { Props } from './types';

const steps = [
  {
    action: '@userLogin opened pull request',
    avatarUrl: '',
    date: 'Jan 20, 2020',
    id: '1',
    login: '@userLogin',
    repository: 'repo-1',
  },
  {
    action: '@userLogin opened pull request',
    avatarUrl: '',
    date: 'Jan 20, 2020',
    id: '2',
    login: '@userLogin',
    repository: 'repo-1',
  },
  {
    action: '@userLogin opened pull request',
    avatarUrl: '',
    date: 'Jan 20, 2020',
    id: '3',
    login: '@userLogin',
    repository: 'repo-1',
  },
  {
    action: '@userLogin opened pull request',
    avatarUrl: '',
    date: 'Jan 20, 2020',
    id: '4',
    login: '@userLogin',
    repository: 'repo-1',
  },
];

const History = ({ classes }: Props) => {
  return (
    <Grid container direction="column">
      <Typography className={classes.title}>History</Typography>

      <HistoryStepper steps={steps} />
    </Grid>
  );
};

export default withStyles(styles)(History);
