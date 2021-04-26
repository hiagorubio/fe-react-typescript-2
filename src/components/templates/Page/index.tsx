import { withStyles } from '@material-ui/core';
import React from 'react';

import { Header } from '../../atoms';

import styles from './styles';
import { Props } from './types';

const Page = ({ children, classes, useBackButton, onClickBack }: Props) => (
  <div className={classes.page}>
    <Header useBackButton={useBackButton} onClickBack={onClickBack} />
    {children}
  </div>
);

export default withStyles(styles)(Page);
