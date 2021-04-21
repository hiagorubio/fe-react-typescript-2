import React, { ReactNode } from "react";
import {
  Button,
  Divider,
  Grid,
  Typography,
  WithStyles,
  withStyles,
} from "@material-ui/core";
import styles from "./styles";

interface OwnProps {
  buttonText: string;
  onClick: () => void;
  children: ReactNode;
}

type Card = OwnProps & WithStyles<typeof styles>;

export const Card = ({ classes, buttonText, onClick, children }: Card) => (
  <Grid container direction="column" className={classes.card}>
    <Grid item className={classes.cardChildren}>
      {children}
    </Grid>
    <Divider className={classes.divider} />
    <Grid item className={classes.buttonArea}>
      <Button onClick={onClick} className={classes.button}>
        <Typography className={classes.buttonText}>{buttonText}</Typography>
      </Button>
    </Grid>
  </Grid>
);

export default withStyles(styles)(Card);
