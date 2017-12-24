import {BigNumber} from "bignumber.js";

export const isBigNumber = (object: any) => {
  return object.isBigNumber ||
         object instanceof BigNumber ||
         (object.constructor && object.constructor.name === "BigNumber");
};
