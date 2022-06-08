import { combineReducers } from "redux";

import { loginReducer } from "./views/login/reducers";
import { dashboardReducer } from "./views/dashboard/reducers";

export const rootReducer = combineReducers({ login: loginReducer, db: dashboardReducer });
