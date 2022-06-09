import { TUser } from "../../../views/login/types";

export enum LocalActions {
    ADD_NEW_USER = 'SET_NEW_USER',
    REMOVE_USER = 'REMOVE_USER'
};

export interface TAddUser {
    type: LocalActions.ADD_NEW_USER,
    payload: TUser
};

export interface TRemoveUser {
    type: LocalActions.REMOVE_USER,
    payload: string
};

export type TDashboardActionTypes = TAddUser | TRemoveUser;

export interface TDashboardState {
    users: TUser[];
};