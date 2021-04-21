import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";
import { bindActionCreators, Dispatch } from "redux";
import styles from "./styles";

export const HomePage = () => {
  return <div>Home Page</div>;
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(HomePage));
