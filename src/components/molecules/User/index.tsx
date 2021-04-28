import {
  Grid,
  Link,
  Typography,
  WithStyles,
  withStyles,
} from '@material-ui/core';
import React from 'react';

import { GitHubMarkIcon } from '../../../assets/Icons';
import { Avatar, Badge } from '../../atoms';

import styles from './styles';

interface OwnProps {
  login: string;
  avatarUrl: string;
  gitHubPage: string;
  id: number;
  imageSize: string;
}

type Props = OwnProps & WithStyles<typeof styles>;

const badges = {
  teamA: {
    backgroundColor: '#B3D1FF',
    color: '#0047B3',
    text: 'Team A',
  },
  teamB: {
    backgroundColor: '#FFD6C8',
    color: '#c83300',
    text: 'Team B',
  },
  teamC: {
    backgroundColor: '#A6FCC8',
    color: '#059E42',
    text: 'Team C',
  },
};

const handleBadges = (id: number) => {
  const isMultipleOfSix = id % 6 === 0;
  const isMultipleOfFour = id % 4 === 0;
  if (isMultipleOfSix && isMultipleOfFour) { return badges.teamC; }
  if (isMultipleOfFour) { return badges.teamA; }
  if (isMultipleOfSix) { return badges.teamB; }

  return false;
};

export const UserCard = ({
  classes,
  login,
  avatarUrl,
  gitHubPage,
  id,
  imageSize,
}: Props) => {
  const badge = handleBadges(id);

  return (
      <Grid container className={classes.userCard}>
        <Grid item className={classes.avatarArea}>
          <Avatar
            src={avatarUrl}
            alt={`${login} GitHub avatar`}
            size={imageSize}
          />
        </Grid>

        <Grid item>
          <Grid container direction="column">
            <Grid item className={classes.loginTextArea}>
              <Typography className={classes.loginText}>{login}</Typography>
            </Grid>

            <Grid item className={classes.idArea}>
              {badge &&
                <Badge backgroundColor={badge?.backgroundColor} color={badge?.color} text={badge?.text} />
              }
              <Typography className={classes.idText}>ID: #{id}</Typography>
            </Grid>

            <Grid item>
              <Link href={gitHubPage}>
                <Typography className={classes.text} variant="button">
                  <GitHubMarkIcon fill="#BDBDBD" size="14px" /> GitHub page
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  );
};

export default withStyles(styles)(UserCard);
