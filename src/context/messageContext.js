import { createContext } from "react";
const initialValue = {
  message: null,
};
export const MessageContext = createContext(initialValue);
