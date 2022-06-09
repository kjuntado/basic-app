import { TUser, TUserRow } from "../../../login/types";

export const formatRows = (users: TUser[]): TUserRow[] => {
    let userRows = users.map((user, i) => ({ ...user, id: ++i}));
    return userRows;
};
