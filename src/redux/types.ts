import { TLoginState } from "./views/login/types";
import { TDashboardState } from "./views/dashboard/types";

export interface TReducer {
    login: TLoginState;
    db: TDashboardState;
};