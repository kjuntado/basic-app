export enum LocalActions {
    SET_ERROR = 'SET_ERROR',
};

export interface TSetError {
    type: LocalActions.SET_ERROR,
    payload: boolean
};

export type TLoginActionTypes = TSetError;

export interface TLoginState {
    hasError: boolean;
};