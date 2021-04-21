import React from "react";
import { connect } from "react-redux";
import { Grid, WithStyles, withStyles } from "@material-ui/core";
import { bindActionCreators, Dispatch } from "redux";
import styles from "./styles";
import { Page } from "../../templates";
import { UserCard } from "../../molecules";

export const HomePage = ({ classes }: WithStyles<typeof styles>) => (
  <Page>
    <Grid container className={classes.users} spacing={4}>
      <Grid item xs={4}>
        <UserCard />
      </Grid>

      <Grid item xs={4}>
        <UserCard />
      </Grid>

      <Grid item xs={4}>
        <UserCard />
      </Grid>
    </Grid>
  </Page>
);

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(HomePage));
