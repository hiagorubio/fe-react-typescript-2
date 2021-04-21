import React, { ReactNode } from "react";
import {
  Button,
  Divider,
  Grid,
  Link,
  Typography,
  WithStyles,
  withStyles,
} from "@material-ui/core";
import styles from "./styles";
import { Badge, Card } from "../../atoms";
import { GitHubMarkIcon } from "../../../assets/Icons";

interface OwnProps {
  onClick: () => void;
  login: string;
  avatarUrl: string;
  gitHubPage: string;
  id: number;
}

type Card = OwnProps & WithStyles<typeof styles>;

export const UserCard = ({
  classes,
  onClick,
  login,
  avatarUrl,
  gitHubPage,
  id,
}: Card) => (
  <Card buttonText="Details" onClick={onClick}>
    <Grid container className={classes.userCard}>
      <Grid item className={classes.avatarArea}>
        <img
          src={avatarUrl}
          alt={`${login} GitHub avatar`}
          width="76px"
          height="76px"
        />
      </Grid>

      <Grid item>
        <Grid container direction="column">
          <Grid item className={classes.loginTextArea}>
            <Typography className={classes.loginText}>{login}</Typography>
          </Grid>

          <Grid item className={classes.idArea}>
            <Badge backgroundColor="#B3D1FF" color="#0047B3" text="Team A" />
            <Typography className={classes.idText}>ID: #{id}</Typography>
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
  </Card>
);

export default withStyles(styles)(UserCard);
