import { Typography } from '@material-ui/core';
import React from 'react';

import { Avatar } from '../../atoms';

import { useStyles } from './styles';
import { OwnProps } from './types';

const HistoryStepper = ({ steps }: OwnProps) => {
  const classes = useStyles();

  return steps.map(step => (
    <div className={classes.root}>
      <div className={classes.stepperArea}>
        <span className={classes.stepperPreLine}/>
        <span className={classes.stepperCircle}/>
        <span className={classes.stepperPostLine}/>
      </div>
      <div className={classes.detailsContainer}>
        <div>
          <Typography className={classes.label}>
            {step.date}
          </Typography>
        </div>
      <div className={classes.detailsUser}>
        <Avatar
          src={step.avatarUrl}
          alt={`${step.login} GitHub avatar`}
          size={32}
        />
        <div className={classes.detailsTextContainer}>
          <Typography className={classes.text}>{step.action}</Typography>
          <Typography className={classes.text}>{step.repository}</Typography>
        </div>
      </div>
      </div>
    </div>
  ));
};

export default HistoryStepper;
