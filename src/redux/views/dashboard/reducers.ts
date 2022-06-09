import { LocalActions, TDashboardActionTypes, TDashboardState } from "./types";

import { users } from "../../../views/login/utils/testData"

const initialState: TDashboardState = {
    users: [...users],
};

export function dashboardReducer (state = initialState, actions: TDashboardActionTypes): TDashboardState {
    switch (actions.type) {
        case LocalActions.ADD_NEW_USER:
            return { ...state, users: [...state.users, actions.payload] };
        case LocalActions.REMOVE_USER: {
            const newUsers = state.users.filter((user) => user.userName !== actions.payload);
            return { ...state, users: newUsers };
        };
        default:
            return state;
    }
}