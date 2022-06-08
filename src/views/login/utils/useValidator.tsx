import { EmptyUser } from "../../../redux/views/login/constants";
import { TUser, TUseValidator, TValidityReturn } from "../types";
import { users } from "./testData";

export const useValidator = () => {
    const checkValidity = ({ branchId, username, password }: TUseValidator): TValidityReturn => {
      let errMsg = "";
      if (!branchId || !username || !password) errMsg = "Missing fields!";
      else if (isNaN(Number(branchId))) errMsg = "Branch ID should be a number.";
      
      if (errMsg) return { errorMessage: errMsg, currUser: EmptyUser };

      const isValid = users.find((value) => (
          String(value.branchId) === branchId &&
          value.userName === username &&
          value.password === password
      ));

      if (isValid === undefined) errMsg = "User details not found.";
      return { errorMessage: errMsg, currUser: isValid as TUser };
    };

    return {
        checkValidity
    };
};