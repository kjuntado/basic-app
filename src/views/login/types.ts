export interface TUseValidator {
    branchId: string;
    username: string;
    password: string;
    users: TUser[]
};

export interface TUser {
    branchId: number;
    userName: string;
    password: string;
    firstName: string;
    middleName: string;
    lastName: string;
    position: string;
};

export interface TValidityReturn {
    errorMessage: string;
    currUser: TUser;
};

export interface TUserRow extends TUser {
    id: number;
};