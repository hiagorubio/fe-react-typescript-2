import { WithStyles } from "@material-ui/core";
import { ReactNode } from "react";
import styles from "./styles";

export interface OwnProps {
  children: ReactNode;
}

export type Page = WithStyles<typeof styles> & OwnProps;
