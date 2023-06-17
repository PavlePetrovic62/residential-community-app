import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./store/auth-context";
import { InfoContextProvider } from "./store/info-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <InfoContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </InfoContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
