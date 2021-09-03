import React from "react";

export const defaultValue = {
  token: "",
};

const AppContext = React.createContext(defaultValue);

export default AppContext;
