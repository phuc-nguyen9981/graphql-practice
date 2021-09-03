import { useQuery } from "@apollo/client";
import Login from "pages/Login";
import React, { useEffect } from "react";
import { GET_AUTHOR_QUERY } from "services/author";
import "stylesheets/App.scss";
import AppContext, { defaultValue } from "context/index";
import Home from "pages/Home";
import RoutesBase from "config/routes";

const App: React.FC = () => {
  return (
    <AppContext.Provider value={{ ...defaultValue }}>
      <RoutesBase />
    </AppContext.Provider>
  );
};

export default App;
