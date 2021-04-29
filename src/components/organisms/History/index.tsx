import { Grid, Link, Typography, withStyles } from '@material-ui/core';
import React from 'react';

import { Avatar } from '../../atoms';

import styles from './styles';
import { Props, connector } from './types';

const History = ({ classes, userEvents }: Props) => (
    <Grid container direction="column">
      <Typography className={classes.title}>History</Typography>

      {userEvents.map(userEvent => (
        <div className={classes.root} key={userEvent.id}>
          <div className={classes.stepperArea}>
            <span className={classes.stepperPreLine}/>
            <span className={classes.stepperCircle}/>
            <span className={classes.stepperPostLine}/>
          </div>
          <div className={classes.detailsContainer}>
            <div>
              <Typography className={classes.label}>
                {userEvent.createdAt}
              </Typography>
            </div>
          <div className={classes.detailsUser}>
            <Avatar
              src={userEvent.avatarUrl}
              alt={`${userEvent.login} GitHub avatar`}
              size={32}
            />
            <div className={classes.detailsTextContainer}>
              <Typography className={classes.text}>
                {`@${userEvent.login} ${userEvent.action} `}
                <Link href={userEvent.pullUrl} className={classes.link}>
                  <Typography className={classes.link} variant="button">
                    pull request
                  </Typography>
                </Link>
              </Typography>

              <Typography className={classes.text}>
                {userEvent.repoName}
              </Typography>
            </div>
          </div>
          </div>
        </div>
      ))}
    </Grid>
  );

export default withStyles(styles)(connector(History));
