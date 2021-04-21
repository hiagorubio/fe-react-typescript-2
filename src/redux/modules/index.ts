import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";
import users, { fetchUserEpic } from "./users";

export const rootEpic = combineEpics(fetchUserEpic);

export const rootReducer = combineReducers({ users });
