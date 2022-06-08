import { LocalActions, TLoginActionTypes } from "./types";

export const setError = (payload: boolean): TLoginActionTypes => ({
    type: LocalActions.SET_ERROR,
    payload
});