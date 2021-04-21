import { withStyles } from "@material-ui/core";
import React from "react";
import { Header } from "../../atoms";
import styles from "./styles";
import { Page } from "./types";

const Page = ({ children, classes }: Page) => (
  <div className={classes.page}>
    <Header />
    {children}
  </div>
);

export default withStyles(styles)(Page);
