import { WithStyles } from "@material-ui/core";
import styles from "./styles";
import { User } from "../../../redux/modules/users/types";
import { State } from "../../../redux/types";

export interface DispatchProps extends WithStyles<typeof styles> {
  fetchUsers(): void;
  users: User[];
}

export type Props = State & DispatchProps;
