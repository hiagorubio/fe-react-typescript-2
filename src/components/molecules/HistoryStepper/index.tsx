import {
  Step,
  StepConnector,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
  withStyles,
} from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import React from 'react';

import { Avatar } from '../../atoms';

import { OwnProps } from './types';

const useStyles = makeStyles(() =>
  createStyles({
    contentRoot: {
      borderLeft: '1px solid #999999',
      marginLeft: 4,
      marginRight: 6,
      marginTop: 0,
      paddingLeft: 10,
    },
    detailsContainer: {
      display: 'flex',
    },
    detailsTextContainer: {
      display: 'flex',
      flexDirection: 'column',
      paddingLeft: 6,
    },
    label: {
      fontSize: '12px',
      padding: '10px 0',
    },
    root: {
      width: '100%',
    },
    text: {
      fontSize: '12px',
    },
  }),
);

const StepIcon = () => (
  <RadioButtonUncheckedIcon
    style={{ fontSize: 8 }}
  />
);

const Connector = withStyles({
  line: {
    borderColor: '#999999',
  },
  root: {
    marginLeft: 4,
    padding: 0,
  },
})(StepConnector);

const HistoryStepper = ({ steps }: OwnProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Stepper orientation="vertical" connector={<Connector />}>
        {steps.map(step => (
          <Step key={step.id} expanded={true} active={false}>
            <StepLabel StepIconComponent={StepIcon}>
              <Typography className={classes.label}>
                {step.date}
              </Typography>
            </StepLabel>
            <StepContent classes={{ root: classes.contentRoot }}>
            <div className={classes.detailsContainer}>
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
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default HistoryStepper;
