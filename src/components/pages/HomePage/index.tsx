import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";
import { bindActionCreators, Dispatch } from "redux";
import styles from "./styles";
import { Page } from "../../templates";

export const HomePage = () => <Page>Home Page</Page>;

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(HomePage));
