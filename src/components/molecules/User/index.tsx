import {
  Grid,
  Link,
  Typography,
} from '@material-ui/core';
import React from 'react';

import { GitHubMarkIcon } from '../../../assets/Icons';
import { Avatar, Badge } from '../../atoms';

import useStyles from './styles';
interface Props {
  login: string;
  avatarUrl: string;
  gitHubPage: string;
  id: number;
  imageSize: string;
}

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
  login,
  avatarUrl,
  gitHubPage,
  id,
  imageSize,
}: Props) => {
  const badge = handleBadges(id);
  const classes = useStyles();

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
          <Grid item container direction="column" style={{ height: '100%' }} justify="space-between">
            <Grid item className={classes.loginTextArea}>
              <Typography className={classes.loginText}>{login}</Typography>
                <div className={classes.idArea}>
                {badge &&
                  <Badge
                    margin="0 6px 0 0"
                    backgroundColor={badge?.backgroundColor}
                    color={badge?.color}
                    text={badge?.text}
                  />
                }
                <Typography className={classes.idText}>ID: #{id}</Typography>
              </div>
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

export default UserCard;
