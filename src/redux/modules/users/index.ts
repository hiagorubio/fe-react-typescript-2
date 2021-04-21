import { Action } from "typesafe-actions";
import { from, Observable } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { ofType } from "redux-observable";
import { Reducer } from "redux";
import { UserState, User, ACTION_TYPES } from "./types";
import axios from "axios";

const INITITAL_SATE: UserState = {
  users: [],
  loading: false,
  error: false,
};

export const fetchUser = (username: string) => ({
  type: ACTION_TYPES.FETCH_USER,
  payload: username,
});

export const fetchUserSuccess = (payload: User[]) => ({
  type: ACTION_TYPES.SUCCESS,
  payload,
});

export const fetchUserError = () => ({ type: ACTION_TYPES.ERROR });

const reducer: Reducer<UserState> = (state = INITITAL_SATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: true,
      };
    case ACTION_TYPES.ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;

export const fetchUserEpic = (
  action$: Observable<Action>
): Observable<Action> =>
  action$.pipe(
    ofType(ACTION_TYPES.FETCH_USER),
    mergeMap(() =>
      from(axios.get("https://api.github.com/users?per_page=50&since=1")).pipe(
        map((response) => fetchUserSuccess(response.data)),
        catchError(() => fetchUserError)
      )
    )
  );
