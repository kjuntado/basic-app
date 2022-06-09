import { TUser } from "../../../views/login/types";
import { LocalActions, TDashboardActionTypes } from "./types";

export const addUser = (payload: TUser): TDashboardActionTypes => ({
    type: LocalActions.ADD_NEW_USER,
    payload
});

export const removeUser = (payload: string): TDashboardActionTypes => ({
    type: LocalActions.REMOVE_USER,
    payload
});