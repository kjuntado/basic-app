import { LocalActions, TLoginActionTypes, TLoginState } from "./types";

const initialState: TLoginState = {
    hasError: false,
    currUser: {
        branchId: 0,
        userName: '',
        password: '',
        firstName: '',
        middleName: '',
        lastName: '',
        position: '',
    },
}

export function loginReducer (state = initialState, actions: TLoginActionTypes): TLoginState {
    switch (actions.type) {
        case LocalActions.SET_ERROR:
            return { ...state, hasError: actions.payload };
        case LocalActions.SET_CURRENT_USER:
            return { ...state, currUser: actions.payload };
        default:
            return state;
    }
};