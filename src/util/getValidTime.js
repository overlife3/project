import { addZeroToBeginning } from "./addZeroToBeginning";

export const getValidTime = (date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return addZeroToBeginning(hours) + ":" + addZeroToBeginning(minutes);
};
