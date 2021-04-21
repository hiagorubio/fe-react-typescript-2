export interface User {
  name: string;
}
export interface UserState {
  readonly users: User[] | [];
  readonly loading: boolean;
  readonly error: boolean;
}

export enum ACTION_TYPES {
  FETCH_USER = "users/fetch-users",
  SUCCESS = "users/fetch-users-fulfilled",
  ERROR = "users/fetch-users-error",
}
