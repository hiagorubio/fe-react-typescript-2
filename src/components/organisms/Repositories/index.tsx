import { Grid, Link, List, ListItem, Typography, withStyles } from '@material-ui/core';
import React from 'react';

import styles from './styles';
import { Props, connector } from './types';

const Repositories = ({ classes, userRepos }: Props) => {
  return (
    <Grid container direction="column" className={classes.container}>
      <Typography className={classes.title}>Repositories</Typography>
      <Typography className={classes.text}>
        Repositories count:
        {' '}
        <span className={classes.value}>
          {userRepos.count}
        </span></Typography>
      <Typography className={classes.text}>Repositories list:</Typography>
      <List>
        {
          userRepos.repositories.map(repository => (
            <ListItem button key={repository.id}>
                <Link href={repository.repoUrl}>
                  <Typography className={classes.value} variant="button">
                      {repository.name}
                  </Typography>
              </Link>
            </ListItem>
          ))
        }
      </List>
    </Grid>
  );
};

export default withStyles(styles)(connector(Repositories));
