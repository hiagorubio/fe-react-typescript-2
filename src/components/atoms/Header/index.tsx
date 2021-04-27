import { Button, Typography, withStyles } from '@material-ui/core';
import React from 'react';

import { GitHubMarkIcon } from '../../../assets/Icons';

import styles from './styles';
import { Props } from './types';

const Header = ({ classes, onClickBack, useBackButton }: Props) => (
  <div className={classes.header}>
      {useBackButton && (
        <Button onClick={onClickBack} className={classes.button}>
          <Typography className={classes.buttonText}>Back</Typography>
        </Button>
      )}
      <Typography className={classes.title}>
        <GitHubMarkIcon size="32"/>
        GitHub Users
      </Typography>
  </div>
);

export default withStyles(styles)(Header);
