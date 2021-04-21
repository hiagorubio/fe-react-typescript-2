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
import { Card } from "../../atoms";
import { GitHubMarkIcon } from "../../../assets/Icons";

interface OwnProps {
  onClick: () => void;
}

type Card = OwnProps & WithStyles<typeof styles>;

export const UserCard = ({ classes, onClick }: Card) => (
  <Card buttonText="Details" onClick={onClick}>
    <Grid container className={classes.userCard}>
      <Grid item className={classes.avatarArea}>
        <img
          src="https://avatars.githubusercontent.com/u/101?v=4"
          alt="userImage"
          width="76px"
          height="76px"
        />
      </Grid>

      <Grid item>
        <Grid container direction="column">
          <Grid item className={classes.loginTextArea}>
            <Typography className={classes.loginText}>@userlogin</Typography>
          </Grid>

          <Grid item>
            <Typography className={classes.text}>ID: #9</Typography>
          </Grid>

          <Grid item>
            <Typography className={classes.text}>
              <GitHubMarkIcon fill="#BDBDBD" size="14px" /> GitHub page
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Card>
);

export default withStyles(styles)(UserCard);
