import { TUser } from "../../../views/login/types";
import { LocalActions, TLoginActionTypes } from "./types";

export const setError = (payload: boolean): TLoginActionTypes => ({
    type: LocalActions.SET_ERROR,
    payload
});

export const setCurrentUser = (payload: TUser): TLoginActionTypes => ({
    type: LocalActions.SET_CURRENT_USER,
    payload
});