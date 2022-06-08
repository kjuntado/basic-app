import { TUseValidator } from "../types";
import { users } from "./testData";

export const useValidator = () => {
    const checkValidity = ({ branchId, username, password }: TUseValidator) => {
      if (!branchId || !username || !password) return "Missing fields!";
      else if (isNaN(Number(branchId))) return "Branch ID should be a number.";
      
      const isValid = users.find((value) => (
          String(value.branchId) === branchId &&
          value.userName === username &&
          value.password === password
      ));

      if (isValid === undefined) return "Incorrect details";
      return "";
    };

    return {
        checkValidity
    };
};