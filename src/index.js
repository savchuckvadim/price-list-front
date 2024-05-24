import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import store from "@/redux/store";
import { Provider } from "react-redux";
import AppContainer from "./App-Container";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <AppContainer />
    </Provider>

  // </React.StrictMode>
);


window.store = store
// let state = store.getState()