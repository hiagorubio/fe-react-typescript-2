import React from "react";
import { Grid, Typography, WithStyles, withStyles } from "@material-ui/core";
import styles from "./styles";
import { GitHubMarkIcon } from "../../../assets/Icons";

const Header = ({ classes }: WithStyles<typeof styles>) => (
  <Grid
    container
    direction="row"
    justify="space-between"
    className={classes.headerContainer}
    alignItems="center"
  >
    <Grid item xs={1}>
      Back
    </Grid>
    <Grid item xs={11}>
      <Grid container direction="row" justify="center">
        <Typography className={classes.title}>
          <GitHubMarkIcon />
          GitHub Users
        </Typography>
      </Grid>
    </Grid>
  </Grid>
);

export default withStyles(styles)(Header);
