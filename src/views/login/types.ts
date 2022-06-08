export interface TUseValidator {
    branchId: string;
    username: string;
    password: string;
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