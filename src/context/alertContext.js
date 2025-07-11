import { createContext, useContext } from "react";

export const AlertContext = createContext();

export const useAlertContext = () => useContext(AlertContext);

export const AlertProvider = ({ children }) => {
  const onOpen = ({ type, message }) => {
    console.log(`ALERT (${type}): ${message}`);
  };

  return (
    <AlertContext.Provider value={{ onOpen }}>{children}</AlertContext.Provider>
  );
};
