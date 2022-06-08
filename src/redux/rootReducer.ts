import { combineReducers } from "redux";

import { loginReducer } from "./views/login/reducers";

export const rootReducer = combineReducers({ login: loginReducer });
