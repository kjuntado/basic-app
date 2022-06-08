import { LocalActions, TLoginActionTypes, TLoginState } from "./types";

const initialState: TLoginState = {
    hasError: false,
}

export function loginReducer (state = initialState, actions: TLoginActionTypes): TLoginState {
    switch (actions.type) {
        case LocalActions.SET_ERROR:
            return { ...state, hasError: actions.payload };
        default:
            return state;
    }
};