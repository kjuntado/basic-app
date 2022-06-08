import { TUser } from "../../../views/login/types";

export enum LocalActions {
    SET_ERROR = 'SET_ERROR',
    SET_CURRENT_USER = 'SET_CURRENT_USER',
};

export interface TSetError {
    type: LocalActions.SET_ERROR,
    payload: boolean
};

export interface TSeCurrentUser {
    type: LocalActions.SET_CURRENT_USER,
    payload: TUser
};

export type TLoginActionTypes = TSetError | TSeCurrentUser;

export interface TLoginState {
    hasError: boolean;
    currUser: TUser;
};