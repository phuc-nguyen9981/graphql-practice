import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider, useQuery } from "@apollo/client";
import client from "config/apollo_client";
import "stylesheets/index.scss";
import App from "pages/App";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
